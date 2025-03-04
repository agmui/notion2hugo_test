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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHQ2CC5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq6iNs3Q1KLz%2BNW9MQlaaD%2FAxb0CDjPia92FbFn%2BSnsAIhANiYQ%2Bf9J73VdU3duRTQhusTzXT4eI8VRMQBAuuXTSpxKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBga0QpAbJqNJeAgIq3AOD6KrQlvmfklSgrXHE6uexSECeALgvk5bsgAFwVm1I9xZdyY9XNByOvOagRjX%2BS2hO3TBikr5YiQlIhc%2FkbRVIxm7Vw2gngQ6tiqG983u%2Fvwibuf%2BXqmo7lt3TWzIPWbZ1D0jZ5rq25L02lI3nJPwL%2B7yaapiy%2FtEBur80FIcaimLhxbv4FexcdudrgqfHZI1C630g%2BKfOKQPDo%2FiORqUtpHbkE1Gzg0aTZ3%2BIG2tFJqs%2B2bFyWWBFpCdZMrjFQt%2BNFi0KufXYS2eCxFZfLdJcyfy0A2KKdjh85bn0I%2BY%2BoHtC2WourhQmJSKoZVWUW2Fdd5IsxXG7Vzb4%2Bqc814mOKVd1K%2FLRvWfqWUNjLdX2uPTcpdhCKnD9spW7jMEJOfqVEw0tJo8G01l74syKMhrri7jgDfarjtv4wtV9BtX3dH6Q%2FfWwlFIAEYs6UdDm1oVvC%2BAvKFF3XC2UpFKH8T0BIMA5XYwWQbkM76xBLi%2BuE79dqIrxOqB0Ss%2B1XoypRNtjN2V7XrFjCMB%2BWKMN%2BF%2F66AtiRgTfe9Gl8HhHBwG06rLRZDlaq7ztHYg3V1Cwt0kxaipyAv9vNcJpw%2Ba3BPBLlA37hhDtiJMJe9SobeRFoIj0VANzoFp3a1L%2B3zCWup2%2BBjqkAf381hFuKRSgtjSG7BBMST8BleCIW9DkkuWxauq0K7JetqzXJFyMtlRngywuCmUdVb1UxONRdMV%2Bou8LGwCpmiafbA%2BUv99IzVpornIBvoZiWsmk2V9lOAoq8UIgdy7UDGM17t1sAdbiLJMBIxrvHUz51dco2TsPlqxmWii8qdH1OTuMGKIcDuFPGs7j4B3XFin%2B1nxc5syV4NzZRO8%2BsYE9yQfj&X-Amz-Signature=d6f58c454aef61b8b50fa2717d75b0a84d82136b0e6407cce55419b6a1eda1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
