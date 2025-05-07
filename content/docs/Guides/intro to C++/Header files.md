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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7IBO2J%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbjWKJ8ZQeqlOo6R2f%2FQsiQMqUB%2FnPrBgKcqpvUzHQgwIgIaZCFHLBla1aT5CWufi8WlYlo5eBqOhGKxUeM6PwzbMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFKxAWOC8sod2hMd0ircAwjgeqLwssSFnJMAkkG2%2FOU7bOwymFqxaihV9AiCWvu0IFQ8wCS4tBjHhPS6RoorhMxz2HByucc6eBV0AHO0fOj11rFZK4vEL0TdG9S4TnszxZL%2F0uEsnpw0UaTdd3fIlrA2Rbds3%2FUTvpSiolyWiYBK1G2B5roO2Qu2sSW36ATqgTBh%2BlcnHz0ftL5eGdoU%2F8TYjjZSVQ0Ubq%2Fyzj6DhiwMieGns5j%2FStnIyQN0wWmFAW6XLLoVG7TEHSV1qQ%2BrpUika0UWiXeaQqNCT5%2FlQIICf%2B1so0tEiwgO0b0ci3Hj9OZsaz96Vjkdum1XNK520wdCZQg9VbnxqEMBRPIfpp%2Fq0QWLeQPDFYcBfvdnEQpz0JwEpiUbqv4D4e1Pnl2O1MwHBvDxm0P7eCq4TlV3hXcaUmkeYmv0ccsWgwnZKo%2BxWYl%2FkzVnlzKkRiyNgwcYMPYC%2FNIWb8dfOf6s9A0FatCbgpECjUSO1%2FB3sIuPLIxyTlnvHY43Fu4mQrHlltPHYbK0ER6jwfwjdOL%2FX9sIUXT78am5HhnOqQTh7F%2Bzm3nif538IhftNBhWyw%2FW2esqwcpZSyiWmDNa6WuoAb%2Bh%2BROCBfASdnKKU9x%2FY23TL%2B5AxwVcnKn2HL%2F02HkiMJSD7sAGOqUBEE4NoVq%2BYpEMeIFHuoz%2FqZO7y1u4N3iyKYqiggF1%2FS3fPIbWWl%2FbXxe3mYrN02LTlO7TCCyrb18fKaxlliC7Q%2Bz0vBgmllLOPmR0kXDpJYw%2Fvjnomo60hLmU%2FZ24J8uER4GYlXx9qJbgKqACMTv2Vcb4YOvoKG4Z1MRgDdp2TL8iRIh3W5Nd2c6l2BQmn9F9sQf2UPcsQoyxMkkoFmcEv2557Laa&X-Amz-Signature=4f67251ce54180f5705e1b7826299c6e243ae0451c4638115cf9ecff444f6692&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
