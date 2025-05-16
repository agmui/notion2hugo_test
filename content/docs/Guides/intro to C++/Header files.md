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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4CXTJG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICke25N6xdOFjZBYCRoQBhKkePSePhJt%2Bd5t%2BREhHbVkAiBaB8sGEMjz34sWAXQW0FYwQAIpgkiuOIvOmsXqAJ2sAir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMKb%2FMG%2BHRHz4txAIOKtwDcOFcay3y9v92NdyOz%2FsvEbqU%2Fy7GaKDiYw4%2FNQZHNVCRQYvoBbJpZFraqTXNPDeu7QfmbicDUfWZAf0z7l5qwBvzU8qg14udFjih%2BATx59Nu1ocvEN0ltyM8dMQFv5CoOKJXAkvnaLl8u%2F7BNHcvTu%2Bt%2B%2BiJe%2BRDJ3AZGzX%2Bh2HXqXhRkQpeg0eh1JtwUnQ9zeGpvhmDud4HBnC%2B5X1QxB5syhyFk6dbP5AJMU4qwoiteESevn93a1sPI0ugsdSlGHugl3t3sa%2FcOvuJ2cJ6W6%2BGX5GJlBQ6sWQ8lFWxFnIjpvmcziLe0oh%2BTKXrKFpx6awJ8cYg%2BKslbjYnWg0XaTPIcf8H6TNr%2FTKyuth1YZo59TyaC7cQQDwS4aALBuyNA0gLtIAaX%2F9xyXimVx5qwjsUphyeHYqyiK37Y9lXDIxJcrQG1D6ZxxQJ5wmymaON7O1A8bruTAzVUfoxWwCGF2LN4eZPootzK7W%2BeXQmSxe2pbqEdrRaf6zzDtmPq78XpMiizQRsid8OqkMNInWuyGFhUEk8Ew338tWf%2BUIzBA08QxQ3q8nwmoz3iQcZ1%2BNu1XUHWlkJ%2Fs55rnOSF5m0MuVkyUVZ7pStCfeNO9pUAH44BoFWk396UIhLhdsw7ducwQY6pgFTDwKK73YkL0GbjOhFYL8gZhM%2BQtjDTudyjGhrqwynBvKobeQFpgtlrvklWW3XL7ati404LhOsTA5R2R%2FVsgmHQqUa2JH35IRwJh9q%2FJBnAw2VKa%2FzxoYce7nVE%2BVRI7BSAUAx4vKdxiiC%2F9RfXZ2NYv1mU5mixtHhmiDxJ636Qbhjw42k9qTFmcxpVwffY7GgpNDA1Hurz4KLicrmeGZrBPE78FY4&X-Amz-Signature=a1611fcd6679df0d806cf27b2e1823ab863dd78eb0a2f94f9116023ce5ac7e87&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
