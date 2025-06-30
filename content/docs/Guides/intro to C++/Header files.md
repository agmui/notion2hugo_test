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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CIU7EIV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChGAASERHNRWdIKOfpcNm7%2B5yIouw%2FpK1Q53GKTU0oHgIgYvThfE7qCQNeWrM%2FlBUq0MEVUd5Wr2XLbUfQCi%2F8T34qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B3bfqrmnL27RRpUircA636sgeP7Ycs1QFenbVY1WkDmXTlGAxeNp9qFF2ew2ZE0CLH27aSqvrvqN8A9aGUb1Dd8ZSwYcsgvy38N2VqFNjad32%2B3zVOoW%2BXfA0XOEcV6h0CeyrP7auNWySGBCD2Rgpnvpm2oV4255PVccSfJ2x32WoB4Hfr4EwFGrCjbXt5KCkigm2PcEQFSgi9%2BXYGY70iFbxswnK%2FXJgf8jdcettmaSVOTfGhSPDo%2Bgmh%2BYAD3JiyYXNDZ0TB%2Btaby5pdKPt8EwDQW31TCidpEc%2BSgiu50IL2jBm08JutYPlweXw2k9cMPRjpuM06hOnByEBJ93EYtiWj49Xcj5iwZxAxjEYpUWg%2BNK5MeLqdr3U7JR4FKQaUa3PujXjnpNGx3csf3NtJkq9j6NAIaFrgExD%2FPT%2Brr2A4J4J7GLX4m3LrZAzTcuU6qxmpEspjbVwMPWYy438TC86TJ18qLP1RTaSHogIW45c0l%2FRrZ%2FU%2FQmoaBXCWckzoJD4ChyJKehkzGJZOuWGzTpNYoyaEBr6OabFvmwEiBxR1PIjGyG%2FlRsTc1C0VQmzkLkhAezsD3zkQyp8sk11pU2Ro9BNbZqwMUCsq6rJMSnoXG9r0hbpIqpJQpVWJ0Y9K6fYar1cUYX2YMODqisMGOqUBvF2Q8ERdwh9bKinSEzpT8t72D1Fam44evQWM1aq2pi1yiome1fgAv4c3c7FJAp81gntdD1ELMsQImjqCx3es9CcUPIDjdX%2BMbAMh4ZbZt2re6r969%2FmnmVrwK21Gryq0ewLLWWOoQQDuoR%2BfKzDZUuHae8ghdtIoE0tfWzYgMHyOuTTc00%2B9UErNz81zpZM4kfupjiRjhb7hb4PU4UtFtsdNGdNV&X-Amz-Signature=fa37d4bb9287cba5a90961ebd36f6f5d799fec18a8e9628c724d6f9c82eb9be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
