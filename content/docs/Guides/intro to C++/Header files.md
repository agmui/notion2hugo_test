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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGQOLSD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGHKgpDDI6fskwzHpFTnJSS6VAbCGmxcLl5zAPPQfZMSAiEAxa8JfFwZEJGiqMX5BtE2V0gLDHqhoJsFrlwco6pmmYgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDB6yjK%2BeVCUag6FlnircA511rVY5KdNf%2FaNtUjDVDeLZ7DfZRvYLniOuPLyLoshv0LRlb3znWz43fG5lY6tplAHuAU47GEzRmKa3ygOIVEoUMv8qsub5Ug7XZa38d6GFTdSVuRv1uaRr2ckNs5K%2FbI3dl4GeaGoOGtQu3G4jHjjI3aj5pQCHakaJ0BOvAAph6PutHOvp%2BrxSJcxkNGWoyHeQXMA2rPBFP7lfuEB%2B8HJNR8oQlGYHP3hF8fw5WHGT0hH96FAN%2FbX1s7InImAWL1YJRBsK3DtApm1ODbSC%2FZO1c31JYeSO1nFq8Zg80hKU%2FCpPF2idsxYMg02gI7Mx%2B%2FFoQMu8KGdKsJlT40fPC2rgddWPh1LEloet3WtQlgr8OsXizY7Qa9wAcPVfrQFd4J79WUCOT2L19Nc9FXoVpp52MHouz7wFbTaCF%2F5AlHC09opFWgoPWD1b7FAo6kVGZ3%2FeTeTyY83S8nd2FHHFdg0l1O%2BAM3qQeIMonf7BP%2FyfYZdYL%2FcMyJ2DoTP11C2yJtACjG72qgBDnnzv5FKdHjLts1i9x7idTIpvaHupItoX9JjVUFoqbgU1vN56YJjq3Dy1YDPSkj%2BA4viwrkx0XXYa9WotA5MLpWOaBR9Dn7B8ka2A0sEBDfG8H8zdMJ2y88IGOqUBuCIcATmvHewptXsOk%2FXYXoXI9E2hlZxJWOK0cEME7LSq%2BQbbYPu920IGXevukRhQ4HHMn%2FIeaG7bZjKEvbnAIpM2h8sELdQ3oQQgqjI7IIuf0SSb%2FWgKeCNAnPojirdcH3%2FY0eg%2F3mfjp5hAD%2FMm0wPQKxJhonQvAAlupgRYZYmXiZCAq0NAeW7O%2FZidTI7%2Fa64ANhASKtiLnj5NAkjfB0Wiw5P6&X-Amz-Signature=7531f1f43ee5a287f6c5371df44df12804426cdca719ea4e6f8e03713bc6f679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
