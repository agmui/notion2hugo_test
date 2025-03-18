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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6IVEIYN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGfPKPE0xgRpLWyuxPg%2FB1R9b0zlW4nej0hXYgFPxjIbAiAUTEQmoUaZT5agiD%2BIy3qN71cNQfwQtR67Sc8RgbZmCSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMFd0ZJ%2FHcnrDk48NCKtwDms0HNSZpEESYn8pm24p7ZmPeHl29ZSqwZqcsL8IYWfcBJbOKeP%2BiEyqkso3JfzeojIzKzcyvTvNjDzRICdRGeJcjpuXwjurTS0Dn5aTDuUqxxOWtUSBjJs7zr%2BnnVWbGPXiHYMA15j6bQxCyJcpS2cB6cJAsDtclsF9sFwFVd30rzfXJC6U9qJMa6FFHLbJJu3olVNrUOlYVy4ko%2Fxsq38YKBJ2s9n%2BHcIBO81XWuL%2FG9fHGFqWnbbIddysMXc%2Bi7Kp8u732VA80vlRssQy%2FNGmlTuWFY5uf8haDiIOxXBxhFyHu0gBghvtseppvJSH9h7vMvKS9VWV655zChNePUKDr%2F9%2BsN2i2dj9dqzaR%2F2qZP7DwRbDBGuCTx58e%2FlaEUhd3Dw32D2dXpxuKEiaqyerc8OLb7ZrrQVOIMe39rQGkS9LaMiHgQ1yoe0cOncwkD%2FNJ5OwGlY5xrO6OzYbvFEbnV8bCoxbNIa0cbuiRCPnMKegKeh4zmCbjkkI8FJcK7u6HRaTfOLrynjePJ7Kfd%2BqsPSLwMvNZz8n8TBn1leOGC61Q7UioLLCpMVegbgFS4CxEMzywXH2nZIw%2BUjq6dft16uzApJHWOJ3AQLoCAPzbhuqr1%2BErSiLjQjkw%2FLDnvgY6pgH698PLPHah0vwblwh3REG0y40Oh2LF5C2Yt%2FqokYvJ2INRRrumMNwcNnT5SamMRz6BgN4N8LRIwIzhkikq%2Fpd3PtP3S0fRFj0zrfeth6MBMXi4bBXeWKS8ZqYW3bwAp8YGLiylQprTWZF5l1JuDwWDgi%2BOGQ54ROkl34BmphHdvGAEt8xxJfeLDWND1%2F963LwXExmDvNGUxK7sx%2BZUFdBC%2Fl8IqjrB&X-Amz-Signature=a916479e7bb0fa8a2ca1557ebddc853688f006103b3d8a5a5061ace0dabd111c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
