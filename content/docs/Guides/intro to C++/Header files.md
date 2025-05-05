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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQCDLZA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bal2n2tXN7vpewmGTGg6QTNv63hwOirCHCXs%2FpLANwAIhANdHqNXpipJxeM7XVx5gwFjxg6is9Su4NFc4pzXd7yYzKv8DCC4QABoMNjM3NDIzMTgzODA1IgxfZBfcojCtyb98%2BQAq3APakK85njelUVDeUww1Ulgmw2zgQCYdDIJTHMqSfrDUPD8L8qRw3m6aomHIv5dc03ZB9r9c17etyQbl0EgLAZIPz3mLi1bFXrb58i57IimEimEX6OzLjhlACwuRkS7lqeyQ8B2dmZK8M8PWgorCbpVQmwXV6G7hrnz6JIhapi9iGH58efZSeGW5q%2BTQ6U3twX2E26Vjot1R6GjYnvIEnEVN2pmBZxry7l5jIP2zMZvSQ7iVpjU5%2Fe6WJQSR8RXQggkJuVzL%2BmZjR%2FBWC5cyL7GUN6GQ%2BSoASrlKrVwmp7hbr954b%2BMUNy5gpgkQd2jIyaXbmK%2B1WKX2WAjainoGg10KylxMMp1Cy%2F1qMAUuWO8RQTKwT8O4d0pfg7cGusRzCgiJc%2F8ttIrHIekmzqJznh2QKQsliWDz9xHlEmMuiVZ091DIR06pwQfqxaxtrdK3g71m705x9mU72x6DChtLI3L3Up9%2Fii6kEcPNP5FlDyyoPJA8CyujCTjrs%2BZfVljOECGw8cUH1JInIaOwc%2Blvf3ace54QqL1S8pZD54IKBT%2B%2F1ymOMpabi%2F8hCxqOkcWKn2qTxu6GTuCvUadnu4UdmJyQ6lX3WpcY7k6gBDmTowf68AzUBZoexSgHIPZJ%2BjDz5OLABjqkASCYtZFgnjlwGBr26dBD7B%2BNJE2pNvpibnv3YURzmTudHCshmh2L2b8u14aN8OUP%2BkT49xXoZxD5Lckq3xdHIGKlgnwLdH047VyHVqTpHFa3EJ9A37uLerpPpnBw6EnEC3gEy2R2cK7EWNtAESPYcY1CZCF2ViDPWVRmLWhsLoTGZTFCYCD8F41X3ayu8sbSke%2FnyE3LtpUqiqdkg8zNd4TVECBf&X-Amz-Signature=35f4d705396b97a3be764e5ca84daa816d095cc60953701af4ca182fc189a612&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
