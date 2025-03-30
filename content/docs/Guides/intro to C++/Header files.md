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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J5HXM2A%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF8K1mtJ2WV4cYwNgzOoqWTqf7v4j4jf0%2BJ0EudC89k6AiBvGxQOEVB64yUBS4pYIw2k14W1QTjBgeAq1lWbtJFJ%2ByqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMziBgCS1UYRfG9PyIKtwDfKlLxKjT1xEgXr06bpZHTnwkOYKkWP%2BXgiq9Q0qw2lhJmXXK9DB1FZhEPyite7TKIBxiGWVdSu2UuqtiMyCEy8aljvOV350zIzRFDRw78duz7sUrE62gDrpN%2FdThCznOjcKHduRIUWI17I2Y0inHsVLMTxN4eI9plcUwjkpJChYql7dcTkKdOvzPnNlMlzjMMvcw84wKI5HfDl%2F5U740DiULTxYfKCjFTKCCW229QaSiozBxFKsNv8%2FP6X6QBSeC4Scneepc1SBk8qmAHnVp6ewoyhpbL22meOXcTjsKe4oY0pxwcS6J%2FA9sv6pB3im7WxFC4W4wPNzo6Z4xlW4qKXHp%2BA9QvrQQr9Gp8xTRorBiZJwKTY14vhuxhnwpVrPDsg1ueNWhPPa9Ye%2Bqf4t06%2FNWS9ThMb%2BBGWnM0yca9tQHc6WFsux2gSKxMFl%2BLRRkwABcBP7Vac1tLoxdwVhsvfjwKYU165%2Bj2WmybpE6%2B8uOxy0sLzzTFz%2F%2FcVJGIRwlnqf%2FBvV8r0UQAsUaSRy21EfCJ4HaBUpa%2B3yfWlmeo36lEv7M4C0qlUh4bL%2BUscmCqS4xUqhWlBFFef9E5xWn181na%2FujJMxzGX5nFHp5cTwBsYAx%2FokKwdSX1AMw9P6hvwY6pgGge974T36Mc2NvAMeoa5RT7epD1lYMkIrHY043%2B61wh5UYrdCySPFWWxzoCfP1yi3MWxTDaTxcM3QedJlOOHY5jCduq9UWcUDkctxZMVJuem5k1HHLYUx3eBcPZMdYjMPHwLvu8cxg89%2F2IWEg3yh%2BmMwnJuozEjkVOiVtmZwYZ3lA0OunLJzGJn9flczwLW%2F5Ce8Jw9tgBD27vu3ouHKKD9ahoT%2FD&X-Amz-Signature=1cb0f0b0f790ff35bd610dc89db7170220f973599c7a5df641ee2df0ce16caf0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
