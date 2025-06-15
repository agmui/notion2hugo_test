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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLZ5SSO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCUowd5xg%2FMYQjO02H6bMJ%2B5nFpHaOKLJw3265kxmtYTwIhAMJek9B2rEF9L4ccifWTTaWztN6BNj16J%2BiRRAAU1rz8Kv8DCEcQABoMNjM3NDIzMTgzODA1IgyV%2FTZsmSt7sqV8sOkq3AOqU%2BICL0MA%2BcZebv%2F84KqktAzePc9UETxVSQgahpijAbP7uWH8FN%2Fr6DCuTg0KZFNeoDr%2FAxVM7zr4kdMykn%2BwM%2Bs5gtom%2BVnBEpIZ3%2BQsdGM48jopX4JWIYUf9XPEYw01SbObfMfekraZZqq9GVRDcC%2BQcWke5Dn6T8J03gG2tXzThFTGDGhnkmKTUgDXFKM2ZGdtmRkGKhpm6%2B6HuCZPvTNqmUgNxQm4%2BLxFf33tO0dRHhYmYij%2Bbn7WDHVzn%2BwPROSmIjN2US6OMrqdLk9npLQ53kuVSbLrQBZ45meqUXq18UMk99wO0Oo75dOGXP2leyOZmjETNjOXcuXMxDV7u4DVRD9ybADFGf0XXodQP4i9TwTaLH2KmLcmFRpzLKoU5piL%2FeLlJVChUlyiTW6RKkFPZ7S4Mj78vtWnZJ521r%2BtTZnVcO8u43eJb%2Fm39dlVL7XgZTSRazYSAf0zGah2kdpZrTJsobb5Kquk%2BBA1nSDWxaHSi8bsbeuBwgWmPkeJSXaLg85qlGHnGzmkLA%2B7hM18G9k7lvMVeTVRN59YkBvKmpES7GNe6ABd9qgQveir6awSfxZ2Z1t4%2FVkO9vq4il0CSB01IrlJ2Ol4bZlEb%2FgzhaP1UB4FPGgEcTCWqLvCBjqkAXalX8ZGVcN4Pyp38tj31pVRWaLZY6jOY9PmjN1bC7N3mG0JurZvvjKYpQgnK1GwARWyFGidqG96TuCCoKe0q0d9GAmpy8P%2BoSMRzGUMg1Cp2HAqYZYcCZRBGsDf2uZ%2BZY4wwtJ8D5lsxVJQtayn2aKdnkyckmN8HCsGUHU6IfOXejI0lfOpVGX9XgesW9QqEJF2dKPD1EmEl9cMPyXVS99BRkIE&X-Amz-Signature=c65cb0888e04c9ee674d59b08df5508d1483433a36faa6fe2d81a06241f03fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
