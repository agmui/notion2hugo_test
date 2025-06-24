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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDAWYKY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGnYl2t1LjC5VhGMXZaVTK768CSxyUN99FInt%2Flv2hUiAiAbTR3Cr%2FNMQRoVKr7B%2BL2m03zc0VFp%2Bpk013zNj4NVYyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMrokUXo8lt0PBB%2FBuKtwD9tFNi87g1bFclC3CKmywnYIGCzVmYk%2FQ0qRnLp5Dyfoxq9hhMzqzLKXVkH3pgBUgcQj3oShjCgkQmxiYWPv2f5BI10J7XuaUNr44j5HulVukjP1FhBHAcAVFPMrVxKZSHPJVojTfUtUNDr1INSTXcIfq25k3y7%2F4wTnv2284L2KOyBk4ZyukG8HNcBvVRaRkKsVlagq2Fu6z4aHRrSAhXmsPPtQzNRI4c49le1rHutOKf%2Fa37OoRUhoK751fT5b18w0K3W03hY3WKaf4tkxwvWd2SBuDPiHQ3NgC3UTVni72%2Fk0RVBDZg7ehZLTeO1EjA3ohw%2FBStNUtk34g2ZFNcj76VyB1m%2FiUqnU0E%2B5sV09V6C%2Fj7hI%2FlA9P%2F2snbHJGkNNvF73xxTwGhjZF3hy7O2HeqGnKGvEtBChOB0Vq9v6SjQIFbA6uheAg3iEuSslUsMEP0ZrueWcQCNYPjx3njU9A0f5d%2BWWidvfFwvlR9TFe9z0LS9gi9%2F6uE5SPE4OE4D3fwX9eiM4WxYsQ9h%2B%2B%2BSWpUaIueMnE4Kyb9edeJqjeI2h5C2iff1XhWbN6RYzdMyzqkTDXAuLaWSw%2BdHCLH68jwDVbvMe9uCyWIsVSlUZJTsejIxVB8OUEux0wgr7rwgY6pgEs3Zhhof5r94L1bOiOoX4Gp2j31p0jHbzQK7nhyqTZnz1DUImTfcU0OO1dUAuVL%2FVAwVxO3JmAxr929V5KcVA5yZPTLpyr4bcHDNqu97lzk%2B9sbntgoJtnPCLgk6frT8QFqqle%2Bx2L7ESd8SCryB15kZNgvIXhX7YKo%2FtPgIl1hoOcHKzM%2FXRS88o8qNR4nb0NIpJ73OcNBKFlImb3nd90qAQTslg%2B&X-Amz-Signature=a05402b1bbc4809ff3c3476e69d58a6c4f1f6b6abdccc70ca98eabb1bbb9e05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
