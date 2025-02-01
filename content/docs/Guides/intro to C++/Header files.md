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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLKRXUC%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyhXcqzfMhugdN884g%2FSEKc%2Fe5dfDT8BfYtzMncobJYAiADK8vgqBAqKZiZzdPQr0I1Lg6jss5zcmf93PdMZMFphCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB2Wpt7fSw35KRDwyKtwDUNOFG%2BI3Aw3%2FLR2gN8RaIoEZSxAnw1edleXMT8llmMCl%2FLcYEe%2Fe08QDyb15ZVnIumOc3JqvxB7%2Fp1uDzu9jAcFasFHU79FGcrf52lDLf9o5GwXO4WQfRdr0rGQ8tCo4V0TtJoRebpQb0SmCug5rV8eLEbauq5cOMvHJFCfFJ74UNlxqcA0ZLOjICNeb7ZqJLE5S0x1w35ZJ86tV3Tc51f%2BouMccJl9r%2B4z%2B9cucbfyttqLwaEOc5XG2%2FXqMmxnfvS0Bl0R5qOaOPHJ5yQk6JuRSK2DlrKQcfW%2BpqetU2J%2FBIqIgvwN4q3ZKvaf%2B2N9FK3HSCdBV%2BNuzVxD5LU6CGPuf8D%2BS7yR12gYrzLfhQDI2sVR8DaHsEr4fiG3y4umCc5eMJYzjQ%2BTt7Yc%2FcubUNfRgWhqvO5m3LVy8GxMAFWS6LPJahqhXcYvhiBvpRi3QbpDNcPu9Gb8njKT%2Fr541tECAT9tLaZFajuB%2FYI6T%2FcGYDreuib4FRAcDkZr5Op8fQzsSxBnHku%2FYi7Jjb4XaiyoQbHOHBOOCFry6ITxSjUI9UrVeCCImAu6dKJSMOV7Pk3JA0y5tzn2j63w6UwZCa7bDhYubVceYfc%2BvYvNijxtk8HtpwzAs1qXx6Yow8KX3vAY6pgHi3ghSvn%2BZSvTDeg8oH9paGAr14ILzDueaUjAQL0qHutzW7D1TzXVX9iTAHV30EIAcak%2BO5sA73V%2Bdh5lQp0WIHGHzcqmhYjYQXGOnPkIYu7CB63TIVXcPijAk8xXcWDwWF7FESKYPf1VHWjkNLNSXEzzISZG7oOmnx0QRZ%2BN%2BbjLlB7TjgNiWSAoGwRfH%2BcSUU8Vk9evr2t79D1agaWBdLXXEmqNP&X-Amz-Signature=e0dc06aa18079e23b213cfebecca5da38a3e16c0cf67205f162b6d2720ba595b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
