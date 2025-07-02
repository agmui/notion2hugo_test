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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSQIUKYX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdbFIb8oF0szHlt9vE9h5TkLgqgroPGDriAmr2Ps0HCAiALMVApkzAiIpZI%2FSxFLLSWGJdxvBanFH4GVOlFR2mtzSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdIn19cCw6jrhPgejKtwDNOF6sNdhRlCrzmleTb3zdYGdOYjRqWMTDaxBbIl%2BYmCEbJvkNDlm6On39l8RX7RfEYE9pcFKHOGgCkVUKI5AHpxunrvjcUnMoXOwOc8FxImU2vfOxg%2Bt0jehiPhvpcXXEY4x%2BWdTk2P5Ytdrf9g52i1TuoKnIVLOdiD7AUdiFR5NcqvHskqFXoRCnbxpAZlbnQQa%2F7NiRdXSEcExobYhi1f%2BCWL7rZ1GyN7JL%2B0nLfyMCtWk4cR1bmf0j4p4ZeYXMv9SWvt0u8MkpOJa4reSLwwjr4VoODe30yaNQbt6pbLo6SCwHq5cKSZc3d1QIxxZBXh6xcDBYAMFtFGdQlyWdsk4nMgfBkV7GZ%2FWXItUVJwNeUNfLvaxlVh1sqjwTFQnZv0LTTPPv2qGE1tnLZWks9WBwB7h8efzv545oMR7Uo49Oc6UbUrSFVlOnRDSZnpYIBmH4KtbNa3yUYjdwuhnKkteiLpM4WirKSSbAhoFs0YfI4t29MzbtAygb%2BstllWpuXHOSIumVpya4Hv%2Bi5TskWHOGAJ7uCEs1R4nHn9nBv2LkD8fgAjD1sS%2BJ%2BndfIkUtlajkaaxoRw%2FyFvY8UXen%2Bbc3Ff2QSepsDqIjAUOCkr5ZLY7OKcJwDtJnTcwvdqSwwY6pgH8l0lSc%2BvgU9TpaOvkztBTkdvYJ5uCL%2F9EORIQGChrBNYaoE10vxQVuLU4BGTbNAy9w1XMbvQmYFym%2FAISR4n5ZI6L5XAwYjRi3frrUjV8ClVhi1yeYlKoKaGRjcjn7loupoFDV9B68XjKkLxxNd%2FLR4blgNUBmYAYxO5MiG054A40DDirbBHR4Tht6dvia3SyBqDeaABO7wjsWNCGC4wp1vLlIpC%2B&X-Amz-Signature=bf526977f342667ec728eba2a195fb655b0581be4f3d770d46b0b3e7bce4aefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
