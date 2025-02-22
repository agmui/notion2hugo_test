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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4K7JWFI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj4rAWdfgih0CHvjm%2B2eb%2BO9rfu5jZnUhTmm%2B9mdiHSQIhAJomBgPJMuKe%2Bpmi67L%2BsduQw2bj8Ju40G2VYbZENGpKKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B%2Bue4CN5zkkaNsNsq3ANDOgWrXqPKWB0vi3RmmZ9zep1kkdXt%2BbhHtNvev7E9SS0jJcPs8gXkh0KLbCL9PlhEEjin%2F18ZAQkwG5lpvZpUHgwX1GagYqYJjlDiWaKavgQd6LeSJyoeAgI%2FQYYBwhGgzC%2FOMNIGIB%2FTAl2DjEYo%2BeChKS7nhEgYQU1tLEjtCxvpDzw1UVLGycP4m%2BxsfgreuLPl7PUBhoXyP4VlgEQcQvrklC4bFSj%2Fandlzt86AGvIdiNq0s%2BizpwcUhZWIT7mGBCeBzXMTtk5o%2FcHsxgwHOsxs7MjUf4MU2HhjzRVp2VoTcSwylmvXQvTBNXOQ5VrH7jOZGkzH54CZvkwEX4olVIcRRtd2mdsKVn%2FZ737lFObIJ4kEu80xeBoy2wsXmaNirqJHhgkew1%2FYlCAp%2BU9cK%2Ft8aS77LOLDE97h6w22NfDi35ePumA%2FPcIdxbv6u8Wqmc4%2FT8gBN2I%2BBILGneuAF%2F5ZGc7TaUzvfme%2By8%2FvBBjRkMBqRXeccw0XWiZ7amEg4jlIJWKgk7esy97dALrY2bxBOmfCsmYWpqc1k37mBDc7WiI%2F1SOB2J%2FH3T2TPg6QdGlhQB9y99UBxN6I4SINwdmli420PUStMKEFYMj4ONPaWj1Wd89g7KT6DCIz%2BS9BjqkAddLod8a%2BsUEWxP7%2BL9uJsOx0W8crjor6LDckz7wPe3pjo8nmfrGATmH8NY%2Ffdo8u0oE%2BMdFWesmF9bYXSBfFPlOaD6MyDJdVuCeZjMnBW7pNXRXhfUFfkIfUmoxwMwcMLjCDS1SutSYVwUrcfHWOCgTWtG0g7OPmHIxBfF1%2BmWWClfE%2F5kUsGWbA9zw7m2EvA%2F4vmiHx8UIRAMTg%2B0iQy5WdLzf&X-Amz-Signature=f305bcccb7625f7017ff5051434d1ed4a0079db926a404edf609d8f5233b1aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
