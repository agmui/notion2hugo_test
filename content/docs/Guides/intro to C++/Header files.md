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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGJURBQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIFqyqmkTqOrWd06cYBJmkBT76IO%2Fg%2FnmUEk3uUAbUMlIAiBQ847clQ7Qb%2BSPkwS%2BghP66umyVuN2zfJ%2Fy9k7Uc7wLyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi2rQymG%2Bpd4jRWsCKtwDtL3Lm4zL1%2FSx1p%2FhH0Mde1vSabnP8Zo%2BPQSYkaXAo6wndJKxmcxBklTUzYvLWskNdyTIaKLGEvOhBaJoQIYnNSBo17DhvQgdfl0c0eI2HPjAzZQiH7A0foC2ViJKmHzT8t7tf5PPPpBrQoo%2BD4ENfaLAhTxAe%2FAvIsXnZsQNcHny3XHoT5oiMDkRZX1p3qyicFxYkI3KGGz%2Fiq%2B%2Frm%2FNaW51HQA6KXtHWcaIUYBl%2B3Mcyt9h0G7rIytU9fQZlneHAKsgW8xE1Ua%2FPmb%2F7PbZxok8O5KI7dPeVmHzNe90ERJXZPcHmjabePVopWfQl3NB2%2FSEKbKFVOSeBiQ9Anl7tckswBCV96dJeCNfBasMxxfvC01Wnse%2B36cfX97EirEQebaVoT4pvwoQWQIBYSwxo%2BKBRaT%2BK7hvhupyUnHMpxGtLt13IB2ywdUAWlODzCQwmA%2FfPs1Z70EeMz2DZ4RwZjqjwhnSzFhPC7vfDLTxN4YkA9v6DJzoVc%2Fyw6fMDbjmTsJIb3apkxGIBgeaRKwwobqGrVA2lp63otZIMEvRmgPCV3gTF4%2BS4yQoLaRyHLqiu4d93J5pQOepwkyRktBe69L%2Fk1wROfBFMVLObuR58rODVyzIGUIrfeAnEpwwz%2FznwwY6pgEDIqOlVbUYyVaZZHRJ6rnX5TI8Zz3s%2B09GTO2cwFj1kwaL8jcNjDuMGmyFRJFUmvk2htcdqvN%2Bvg8vLQQY3xZSwuGZuTzthNM4%2BsaSaSusOmCDWn1GBYcLw0XE9yUeP5KnJUjfynJ8q7AW4T0%2FNHOZwFUxE%2FoR1Qq0rS7owDx7J48YLEkqd1Sr9sOb2LAfsUvZ%2FKieUeEiNKH7Lr1s%2FOMUOwvfoPyZ&X-Amz-Signature=783c8a486bca1b9db17360da5fd9aecc1cf1e16a55101935c8be75316a48ba9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
