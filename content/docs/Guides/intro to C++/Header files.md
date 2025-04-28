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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGVSQHS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ziczts3encqVff7XCUmyc3D3aKjtLD%2BqopbW73z4fAiAyjV3rH61PAi7szcMgoFaxHUgnhXXAxEa%2FqjFz1Ha6sCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMtogbzR97%2FSy%2B6VkcKtwDtd3tKPB6nbxBCCsZz8qvFJt5tgYBRmVRwI2dRHuKWu2%2FPzDFgauYllo6VtcXv9n%2Fbwd8Gbx5iC%2ByoDNsxtWSCC59mTDT1kRP2JnMmsIiKWnCrPKnKhApxLgAS6Qn9WdiVXZOVn2mc9L79%2BY2OkyWan%2BCMAHTlPxQAKbELIhZvnQZHhyp7sHhkqJ1twmTbo%2FTPEuIFR95gNgW4eH8CWwFOSG2MHn0OTDK5t42wqdiZHLziJW5frFbW6iPgv1WsXTxd9KoAWeOqjz5qmJUeWvg3caajBiaDEWPeQAW7%2B20fh9ls7Dn4TF53swGqRco9U3b%2B%2B3IQPruCcUY3k3dznJyvRcdMC1ltUnVzYzoWpxl9vTt57v7uaHFgpduszwMx4GZJ3MJw6j1EobWrnaCIIAXbLdVzB5gOtN1yOeaIxvI4uDpEMcTSEVQKY2Ua5JcxM2%2BdrsgZQxwEhYBku1OKrMLNwmuUXNpVR%2BbGMHz2QJZ7p7YOUPyGXLppVtDNeelILhtVQCpSDa3Ja3qDB%2BfkxBWTMjPhcbhmQUZNmv4e30zhr1ei4ltMxi5Z7w8kGKdezssGOr7ureD5NHCS9HfXNSxuj4FRIT5E%2FZnKQMR5cHI7HGsu8DS6fGxrAolKecw0qq9wAY6pgGQG0Uly4ErV6%2BmStTmKtqP1rTWzxG6R%2F0h34ff9cxvf55qW8ghGagdjzId774IlfNABuLHdXsvz2xoxryob73ovbVYINJsixb3Ibn3vNXFzEPPgTg9Ur6XWwmdEnPaZbWvQ%2Bsbn%2FzFy5nUt6A6MrJrarWeczpOnvbbMY69xyvQRFwi767FxJyvi%2F61Nq%2Bf7SdD12aaQsZNvBKgC7HdhI98faXDfvuf&X-Amz-Signature=d44a18451e6dd63d05a1555e24bc9836bb5027952ea1ab81edcddfcb5a7a5411&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
