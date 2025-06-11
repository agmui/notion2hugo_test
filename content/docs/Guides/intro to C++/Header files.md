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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUKO7HO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYPD%2BRbyk7GjVNOPh%2Fr30G6r82QaUuoE%2Fh0ZlVV46qpAiEAwfhB10Ag3gkemQiGY6yuuErJrOCp8SnOj7UgFL0j8nMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZqENyKJN3cwn%2B8uCrcA0q9gvWBKdhhltQSXgDTM5FHbBfsZg2QNwd59MEVY9UxLbMALCV%2FNGPc3%2BHJlkFgCuFUvblENbtDk7w%2FxpvqaA4jF2UzpsnW6aHmqu%2BFy8VQZVr5MY86FaUIFHLE1rCfEDJlnOEXxx71j%2FkbAcOLm6pls1NEpZWX9X77%2F%2BixApu7W3WsnmTfiNfSAPeibuBDikNH1eljX81rDLlTdXjWahffDrPvp%2B%2BZrFxA11BM53IH9p67BGOSm9w10a1ION6MXuCOfLdtz%2BfkDE6C0f5aosuC3Mh5pnuSdmYN%2FrycT4tFEDJJqYPpXjy1DysgjXkKJKisXQmir3i7XfEPekZ13li2nS6FizKkJGnUE%2FhKp0k3sZe3niWzLXzB5UxbSnOOa3AJLGOGRPntc7SZCM6e%2BkLfR0phsf9YxKHcT6e%2FSyutLS7ewNURUH7EBLXDhWCWCxA%2FmnwfGgullrqWJwoi3yydpac0ZneAAP3sQRwT0u0zFiThvWA31NNL5nGRZl%2FlyAXTq7p9Ml2c0EXT4HQ0DCWV0bPWa0lsW7%2FQO6I1fCdgho1qtmjpZt9h90SV1qDtcy7W3xTsvbN8yYkS5UV0zt%2Ba6IAjqODYjyQkxtsKmGnPkmm05To9FA6YFcfJMOPkosIGOqUBgUyai3tXfYnUMe4Re5F9dwa5aTqLu3cvAe1PMpJ35guz1XoiM8Ag7cMqY3vQhiffQQywHtj1A3p3tKwiSWGUc45xZesiYOiJ8MY2j%2FSQ6ULwohRoZc5HfelsIp%2Fkyod46i8bnkTQz9rwgXelTrpueBNZmCYfw22aMuStjLlvcggTBx%2B9wc6ayZciBV7oSVtitf0jsQLeYEK6xzuSpw9jdoYJExKq&X-Amz-Signature=34fade8580096aa3e7268b4f9234f84c428474076a3046013bcf662fc9cd2ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
