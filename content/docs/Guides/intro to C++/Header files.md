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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5OXNX3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDl208VOuj0j9mf2cw0yMJHfp26xRComjtMcHo0nDF8lAIhAN5KPKESXidpJvOulnd7sos%2BFwl1WqJeCFYPRM%2FhM%2BgZKv8DCEwQABoMNjM3NDIzMTgzODA1IgxIeFQgyOn2l5gmuAoq3AMlnQL3D%2F%2Bc82lTxAGgzhlifUPCiAmVsBLXJ0%2Fvz32zISDoBOX0wgymPfvBNG0lIbVXggBOmn9M%2FjV4PNi7NFsDoDEeZJQ9aS2%2FyN4ec2lBN%2Bit4qadcVGlcIo3l1tZhG0bSOMVSc8AMYEsZ5gRyRQ2ASpeuA76ylO6%2BuCB4wg3s1ZuFTc0K8%2FCRLo2UgRtgfOq1aYg5Hh9Crmh2oepj3h3kDN05eMfkHxMU%2F7lFeraMTEtH%2F1Au7oYfRDIedW7zWylgY9%2BXUl7Nz9pXwC2MnXTTM%2BOfZN%2Bg0YNx7gc1IPmDCLeQ4gnrk25bXhjtCThdbXsW4roWBJAxNrSZN82TjcNi4JO0NlF0MTu3RXGnTdht0O%2FTVW27QjUzoJED93JtkqLK7cRRA840a4UyTlEMLT6UW%2FXyv3TjhuRvZAvBGOjI5FKTlrdbauQwHNFnWew%2Fxmr45rUoxnrciUmzYvGhyWb6dp8Zw6jHeKXpgihQlvSNbV0EJyfEynRMmGcFKSccfo7lk9%2Bzn%2Bj5G74pQ%2FmgX%2BbIrhZr%2BNgATW3mSJ2y9JEyop%2B0tpgJ1w2Ih8%2BF%2FX2tMjm%2Bb3LyEiWWOP1LX5P5aqRDZ%2But2o63RqDYXgOS3RX47pcBnyR8WxELCWhoTCp6PjEBjqkATvgfGmpx7f%2BATzkmy1a%2Bm6iG%2BTw4yVCeCS7O6815TTOdZbuD5PomdWsVbaIOffEQTV%2B1%2FtEu338ExDDOoYF55Rzap7sfAfM9Pe1MnTKT9swtZU4%2FOdVM%2FocRazFVoPCiR%2FVHBNj%2Fn9VfNHT0tk6u5FvCi2OB%2FYaTTJs%2FU25a8RijHNJkohi6xraikplBTVnbB4xrgYMP1Uu7oWr89464jPgc%2FlM&X-Amz-Signature=9dbf040dea7b8878edbc4e939590ba2e6180fe5d9712a98701aeb67e17aa6963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
