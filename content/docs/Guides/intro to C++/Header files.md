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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGHP2PXL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVVFGpIL6L%2B5HRKrb7fVipIZCv0lXa7qbKE79HSdEdAiEAnYaoCS8hw9w0WINWR6U%2BEJcEQBVCnARP54rQckNFkcUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIrCdqMkrbKzzuLZ8SrcAxkNsWkZa4DodnqqqM9QMJ1TNzBGX4P4dVlM4L9txqb3GYRMQnuhW%2FiXzioRuu28LwR5SbtI2rpxnFXLxps8vX1LA5evMQ50GoLN1HVJ%2FrMW9n3zYWDb9nXDBzlC736aFzVdyHHJNW4BRRE4vY0%2B3eMpw2Oqxz3f4nLTmtmCnF8yC6%2FZdYGUXVIW8TVLUQD8XlBeTw9qPJqUYXb1j1FqSut%2FFL4pY4F%2BYEpWqzDafveUP0ru%2B6g7kOxcu%2B1l94Zx7QoLZmcnpVGk%2FneraOfb46i5kjkDlRt8B%2BciD90ice0m%2FPAWyxB8fdL04qFrPdPWXyjRZe%2BaUrah%2FBCsr1iCa%2BYPMrWhQpTKsYBGeD3hIsDauOv%2FZQ1kMlB4lcKJjtMO6YZRwKLJwghv02Gnl5Kl7g%2B8VXKkQKqgaKKvcTnE4Z9AyJ6EDGVAkEPdWCnNd4K4DvHIYdsJ1BMgoW2UpYg5B1Y0aQ%2BlPACgaFjvHzP%2FnZJWhMMsL6hyrF6g5hNCISkkh%2FXQr6wAYExrA3M6vBX%2BOp9c5emGIH0xvgap8axP2EsN1rbEtthXkFlpAd6fMjc%2FjPuQ98xErua5zGHZkKTbKHJOAvSupSjRUbjeyS8GprGVnyjVySThvY3EK8%2B5MIaTxr8GOqUBlnR6H%2BDlnu9fprfmblSHyMID%2FyQFVhHbrj%2FNCIN4egRlgsf7D9podpBrdluKQIpUX%2FV4Wl9mGUefrv8IDz%2BOAYxbwBFMuhKgXAotcse%2BiQj5Tu1GpYM2hH%2FuCTBJe4zOq0hbnydJcgAhg694bMbqolQZuOrhPShdt%2Bfnw%2BDdk1ls3947%2FQjSVAgnvcAfhEjbbHlxsgqWl85%2BmX85J%2F%2Ft2%2FqgfNe%2F&X-Amz-Signature=4bf6b06bb518efa0467cc905c54bbe7a70b71ec0b403f5dd0cbde71d8776884a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
