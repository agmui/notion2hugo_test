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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPMEA5Y%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgz9Y%2BVBcfQgSHRVILlEfIcH0eT1SdBalYryophYE8iwIhAIrD0LSPW24IPSDwEPgGr5yfLK8XpaRAf%2BlTx8e9R9ncKv8DCEMQABoMNjM3NDIzMTgzODA1IgwUN313%2FF5V2bcBl0Yq3AOuopKiQ1lIqqyzWc9rSAjXx%2B1cTmZTYNocDkd2Tktd81KNTH%2F5loWB7gR%2B2iTQxP2E3mzdpB1p43%2BQqzPp7iovro1nleZUmPzFf6aKpH0UuKuoUzE9%2BgrD6h0cJlTRBgm%2Fse7hzKnyublA22ri%2F8xH1OIcsXfila55bpNBC87IZfBwObRn17NXyENuHOpnCLPPEquk79NfJzNGnK%2BWMcd%2B9GUnXERxSYauWsmFdsDpsw8EvMfhlhyX31t2VejBq%2BlJY%2FQKzTA8JR%2BWIaPlowzsgIJOrhFXPHt%2BdYq7FuJZggwnEXdC0RMpz37C%2Bdis9S68jqPC%2FV6HDLQbsHKQcU%2FAvRJCC%2FQcnn%2BTX1w6FNASPrKPUvBQXOURBjyBPwVLe8nxMNNG5CBo2KI0t6tkkzaO2Qj3efirTSVpCf9qUP8vbKDRmDPBicmWdxFPXuAfTXA5%2F2nJHrTyByKDBEGucIltwURJcI35NckqRR%2Bz9jQV9P%2F5zNwU0vf%2FRZ8eZKdRXdr%2B22bXHXxTFAohbIaXI%2FdxQCRENfJnsnWPJ7PKkR3CA3inpNYmqV18lmreq9SHmpFcTfeYRFrJenK5hHg5HZl1%2BNmr%2BGMYFzZTTfuJCP%2Fw4BUTnu1Azaccdh6hgDDfh6u%2BBjqkAQANgAs8%2Btaf9X65JOPd63oyPmOsoNj49%2F8OOx8nSZ6CM09KNtOxGgq8%2BXClQUglmAojAGtDxSRg1ZhUAWm0dgAVO%2BEjDFgz2mGzknm6TIRmfEQSQnXsRpLL9nyNvuZy6%2Bar4zzFxrnDwLk5Dtgwkq6Q4kxdUQCYMpAAlCno2qQ63Fh81NIF9VYoLpom9rA%2BeuLq%2BCth%2ByLrtp%2BFOR8%2BR5%2B%2Ffs4M&X-Amz-Signature=e2172c5cee36abfc2445e306c1b5368f6c5bf25b5be10242248fc4b26e119146&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
