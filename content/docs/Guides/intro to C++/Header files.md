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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MW2G7UE%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCRcRuh5yirazpNAxnWe1NTS%2F4gAoPjzaATexqCm5xjlwIhAMSMM5nEp54lcniB7Zfxu%2F%2BsZao1OcY8elvUWKukbBOWKv8DCBkQABoMNjM3NDIzMTgzODA1IgweQ0nE9PDvVToDVzIq3AN3CrTW4IBhWE8GlSyb0LIzHM2jkXQ1hBOgfwYkRI%2FvGm4RzaZY34TG7L7fXj1kFJKmEH7Yd8K3ZAWFveQjEkPyJ7Qwzc4s7H4yAvUU3uBJrx4YwVnnCV1Q5HttOoxc9oSeWx2UkY6ojYzMxEf8McZ0tfhVd9F5ewg8%2BQ%2B5a8QBNkHfDmxPIwch%2FZMlaoll2U1R9m%2FcxmvoO50tca8Rk0CSX0GVQ0KZrvwprSiqDmDmcCd%2FGZciZWWtXOYr0TyET1h%2BV2CiD1xkYTMpo3bhgrq087KEUI7N4dSpMKtCtcKL386M63ykVqVa6ytZH%2B97iXwNzAKkMcuujI2Gb1DMAe8DI3Mp%2BanhOs%2BtDXP2WN%2Fvk5lxBELF29pM2n2sMqXbPh0OQUPjDLtW9DytJmuNP7svZqhzJk51YfA7eS4uyY6hYSb226KO9jpFObTIMahPOFaqOmgljACbCfrdC6phlq3wrbrP%2BvCo2MGR8CoVI2Rgwk36GvtsdcP%2FSPNfIkCFUwwNHPjzPISaKuOZWrXIVSj539%2B5Jcje14d7frjdxG9MPLKMcU6Y1cENcCug7Tx1Ip0lQPhCT5WWNaICeG6ViV%2BPWJSLO0x%2BAbSH7FYM%2BF7RA1zVs4WeU5wgTiGdYzDTl7HCBjqkAU%2BBL323AsEKyX0oX0H3DF1NOF23vOzfVNR4zdwLPWhvt8q91M2TD7d4Zh8b%2F7kWMKE2%2BacsuE0i6ANteZ5HIWtSR1ucBDY0kf0KCdl4kOGrJebOKkWG2KZqgQ%2BcyiIIYvGVVVwFY84lj7cpMKJ8kU1Kr2kErR6pUPRNsEWazRiIhL27KuxTDQEsaSfLqrFqobv9sVydLcS5HmcQgjA0lzYE4Ogp&X-Amz-Signature=d1b052f62630eb20868c1cb5c9910205b9041f40f070e769ccbb03ca456bf0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
