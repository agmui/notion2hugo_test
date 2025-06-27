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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW6EUI7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5yL0CB2HfNSY82%2FncJufdo7kC6gFMK0DaLXatNx6Q3AiBuyBWxXMZPsOwP6NAYWMA0EXBTwDMdJci0Y39AP%2FU8NSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMRJ6FY5ul9YOSE6ArKtwDQxhW5KN1OTZaBWw%2FeGZgK1svUOJx6hGCZyM4Cg7dqBR%2F2%2Fg7IQLAhC0eyL8P0XAdFvb8oqh%2BPMU0MPgKOESt3mZ6DH%2F2%2Fe51n95FbMELQyhNNDIwnellgmhVq9bCB%2F9eM30iXu13ouOAOG9wA%2BJJewo%2BryoHpay8Vmxa8GWv9NdfGCzD5RMEMjIkgJDKS1e1qph2FRAp%2FkDsYkUqw5olGv1X6lWmRaqru69czFhu7YIA7Gke0%2BvWEnB8ccq2z%2BOHMfm%2FHThXgsQtYPlYXoOJXUbqSo6T6yz8Hd3GqJ9tAmw2ok%2Begn7npg0t3tr2PcHwM0adqzLizltmLS%2FBp87CTwAiO%2F8tOqVOmL9t%2F0FAbsmKkdau7FWklNEJa6Iu6ToCS1ryHi0O7ydL8G0O3rjjIr7eFP77%2BpxU2aCFt32QP%2B2%2Fz%2FYBLopOGWsUnSVqNqtkJo4glgEpEDgZ%2FzUT733aXGq%2BP4%2B%2FgZ3qaXIJVDDpBPn%2FQY6iMhNayw8GR1rLLecIccDJ8HdIeSMN%2B7cCuDQAt8lkiA8jn9XaYBTIrAUC%2FlYiaEDxIhuEWzltkmvhOhtI9URbH5HRtqhaqwEsiVuzLcRg5P%2F3CGc%2B42ZDIHjsAH7%2F4y6IwIJiGj3OlNgwhPf6wgY6pgHqrzDcpVQKvqh4lOf%2Bua5%2F8eCYqhtFBGP8W4uW7deQE9u5WZwrLXITiAuT81W0KRbNjS4R9K8F1kZ%2BxPcSNWiSGzn17HU2EDw%2FwCFBVlJvQNOjeDyJ5rHmAv7zljq8sRjhvGuVHTcY%2FKGpquRjqJl4SzUZV8ZHl%2BzJ53zTtZTnangmbWRP4P5ta%2FBdbka6IzYpkGoOirTQ8ZLrYyeRodJ6Zb2YdWGj&X-Amz-Signature=f716dbbb1d301fb4dd4af12e8f12b4b10d889c816327597c0139603f5a251e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
