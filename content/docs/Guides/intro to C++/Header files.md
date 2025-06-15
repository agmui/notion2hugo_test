---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURL26P3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDnweFMq%2BAFdE1w8f1JXUxDqrZPEIYAacyvn9HK%2BcNaFgIhAOqqXEB0V8Rw6k1wkCpI5aN5qIQX8Fby%2BjAXqD0mBHzHKv8DCEEQABoMNjM3NDIzMTgzODA1IgzVj%2F5QKOU40sglrdgq3AP97eN5PUDoj8L1xcBWjeDryf08suEPHVR55WXDL9lBE%2FueqwMKhMJsgKm%2BICP1e19Iu0qYhfPSPmfHbcOQwXiKP4h1wEY9oGL2OD0IdddaEEgWXUhAxqSnCYkeOHEHLiXpdkMdbsZEW88x6%2BKMwOlxjKFHT%2FqyKu1CTRgpyAATSGtZr6X6bPFilROGzZySXB5nbMGZqme5uIT8QFMzaNQWrD2YZuu5TMHRWuldLSklmtttcFxKsPQPuQVTN9sNu75bFjb2WcsYQAmGgZzOc8fh96koYaGxsT0NZh4vzCYNhVjAgFPB3fDw%2BdwY%2ByM9UifJtl1ulg%2BImDl6mqnpxIvNM30W3u3NFKz3E%2B6KaHfilVgN44hf%2BUZBz0YB42Jxr3%2FDoJvAYKlt0TGKNyfKWRpO39op2ZCW6LuqVTcROdGwna2GmfQxuabuTNhplA2uU4mIdYr99vS8B84K%2Fw6KoQxBhv40kqIkjN4Gfp7itiC40eUy8kpemNIGi5UsXAmWEVLij0avC%2FXdm7dNy0fgIwe508VbsyZozPvz5p5fxkjdLW96LSEyHvlI5hoHFehyh1zanhsvr37TYa6ZpdYNCtK4dqdxrpbtYgNMBMAF3uTeQ5Xik4j5NwEyjhGXkTCzhbrCBjqkAcM63PvMaVMdEz8PxchDl%2F80ze4cxXT1YE5DcAgokbKsJ2l2IQ%2BbCELfm8ZceISkLbh57qG6mGuwjRIK2JSDVXrr%2BaigOkO4M8JFIcMYytGtDQMV9Z%2Bd1W0Aoh8Pv8ri%2FqpTAP3hUhD0bbQi6V7iNtJCV6UJIfVLFu61M9UMaSe4up7VbcxFI5L8SFqyXrC9mWPOodMZLCia6KtwfEQ1FI8RLPEI&X-Amz-Signature=63bf3aa97e6dc2bdf7b8d12fce4887e278b97e21f88174b0e5fab13d4ed92c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
