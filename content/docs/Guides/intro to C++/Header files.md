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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KEQAOY6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCa0DFr8hy4pcYJQOsdwVCpSgXbmGszfD%2FmM%2B%2FU6Q4VzgIhANUmd8OiP8JZGxt9R9NTE6x%2Bbj5yBQaBJu6024ltEkU4Kv8DCCIQABoMNjM3NDIzMTgzODA1IgxxFOOxUWD0B5XhVH8q3AO%2F6u9QohdmPLD8FNAqudNed9DdFSmzvVccwuywYKQWr2UgiSg2YRvrt8BkfB5ca5cLz0SMkWdhXOuKit%2BS%2F3BkNv6AT6%2Fg%2B1wfU%2F0hmqPdtbgZSxNAsslNzx00sIlDJYdjQE7FN3j2f7H%2FFYrMHy%2Bz3vv1ZMo2QF7Uxe1%2BF9G62BCbcMvgKSwlSszQBnqfGBUWlNeYgs0k0b%2F1%2B1svZY2diztASeodzUoi6ONIVYhSclq%2FDrtbZsRd9G0S7FWflFZy38cbepyr4dT3gDXihrKM1ChccDjMqL44krz9nGN6pAfg7PMTiA%2B8RPUttC4o%2FufLl3dGaJciXSXlBbgVHpfD8czaDeX97TqWo0er65cN0JimnqvWsV51VdGfR2QEtRGs5Ngy5j9BQkfyXdxJPF2X23zBez2HsMhaeiztej3MHiXHH19Hp5ZaGYZonpj4GKwFz14b9ewqSNsPISpaTZq9cv0uWJHHuVoSJgbidnI3S5oij6q0l4PvRe0Pd5wwoHyYTqWno41qbGyF9s9Q582Qo%2BkhlMMyJfwCWtsc8Yi9jX%2FhMIhsEPTO5HmB%2BYJiMzEdFL7Evw1RrglOymBzJf%2FLjiwKDdtH4yeLafRyCm0bZCpu%2B6hv5O0csygdUzC2zMnBBjqkASengCaqeobphQxLElTE6Xv1krs6BWzpBtD2H3lW5nRLgtjNs2MbGNQrpv%2FH62PHklPvZVG7ZaFpdqh%2FfsiJu1v0Ei7IzcPK%2FbfHlpuy78jtZ1ELWnVpsfHbLwaQ1VTR1TOIUzBPCLT7lidDfREh8cMAU72PxFXUTei0zZ8R1r5dMwgnPLdxlxiuJTglzd6D9fjm0G7JD7blugSk8romVAzzcxrw&X-Amz-Signature=5a41c901828b88df21ab0ee8a81ecf8cde571cbade0ccd8aec79210bab97eec2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
