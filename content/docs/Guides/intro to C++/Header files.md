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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JUSQICR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFGWBJF2bcombCkJ31KJuBrpjkf27a3z2EYbVQKxGovgIgNMf9xR%2Bhg0vW9tjQYpjc6GWb%2FA622go9EiZ1oaUx9EQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJwDWMJg38PlUk8tECrcA5P%2BsZvqe87JJXSYqxul9qllNuslOevSXiBdc3r4qrKN4qbvOBJr7Gc5ptB2a3V0FHSgmyZSrv1fsI0C5LmZQmyz1eu%2F0nMyiglu2qQTIkzRPyQDcAQ70c%2BPgAErIspBl%2BdcM%2FIjtlL5TENZpxUlN5fU3vCxAKBtgIFucqFExkhRVerZ0GtK2BykMhc%2FW8xQFhXoKEcibpPTBd3tSxhbagxu9WIVE3%2BDza4auqAnSlPg1AO76XWnHihp1Em09wvgdit12CTJDGLMNcO8BjTVJXLuUkqtqX3534PHmLobpPldlZiICxDCNFitF3KFp47IyY%2BXi7uwmAspRorhVdlGQKZjngW0yPrx9kYNlS3AE8t2GsQbOEMryz8D%2By7Q6b7n2oR6ddTj%2FkbYHKfKiv7HUoQRNum0mvBW0vb17LtM5iXoGFJrSjjPRjf5Bmv0JLxVtjLqLIAOo3CU98%2BwzfPKWFuwspwmTLvFmjXf83nY2e1QtAiEEIlDNFafRuZ1CVS7zmrk78EvBgtZuhpDAKB73x6Er1sBOnLd%2FjzKLWmLYAkVZDWsw103Drd1GFdSsuIU1gGVSxYmuDlkdChQMSqsV%2FBZYmfV1UEn8brqyn%2FJVyjuE5pzY0UuiZ42Fot6MNeht70GOqUBgB%2F85FalZ9ZdCLIGdZAEv2397Up3ygIs%2BoizoVyLMgRIGUkZEhNNziuOuz6HMPIicARZLDKn3YSY8GYKdfitvo0JDDhe%2FKFa%2FdmQZa8nh5xOJJNSwuPsOGNt9TwIPPkUWY2JQ3Ct%2BLWuPJM5GXKx5PHtvOtilQl4IH5YYwml9LS1BaM95VBObLjelUwte%2F5gg3M%2FIhhrczvHo50PvZxhVcbfMe1b&X-Amz-Signature=d5867decc6f5f030128f21806e1434b14edf22e6fd40ae089f39a8689aa93c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
