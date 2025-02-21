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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPTWYYXR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB66%2BVuaz1N0INRgMc13xwcpL6t48F9p%2F0r6In65vmXmAiBi8HGy1Rv8UsE%2FchsQKNkQMN0uhU8TavdzmgM5XzdaICqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VoBKXoghSlV1p7KKtwDirMXI%2FKcv0DGh21wQrK9KgYpksARYj%2F2TzOAwJvw2pZ3ocsDoA3kt%2FQD%2F2FFCcXEAfj8wJfw0XTxeRvGAUhdy7rghCw%2FKagx4NmaB9bL0vfQgulKoqK0troZY74EjGJgJLw8bXHGEEV4kB4ZblKVmGYtASMyuu5ych4qshuphrQRGTlF2CavWkUYOjBcO5qRsIkZF2Mc974xz8kaz7r0WNS7zLLLbeTbee%2FTCnqcjQyOrkg4QAeHz9Cqxz5D1rd9X9wGzohc7sPwQHJjYTilVxOa8M%2FqyIOCT9Vui9UaI%2BPE4o4la%2FJwlIb2ODW9YMA%2F3vWlU2U%2FVIUDtFj%2F4N%2BNRLVLwx4k82KqfpblMoUcSXRVCu9L8gZMVMjV6Sp8Br%2FDMj2GaHvFsArAd54Jkol6EOVemSzkSwt%2F5swnAdJBNX5cf5WHcsZA9myt9dOlOpcH7Dqn30HEeOJElZEJozTbOQn7BpzKeGZAoU3SS9TEP3ho6AG5ZblpiIGWBDWfA8tmtyReZP9kWRVYFCTCmXfR5DofzwCTvlubes74P7gRe0AxrqN9Wzzct66j3df5ifW%2BzbFOl%2F6RFUKB%2BHoxXeiXbE6GxAo%2Bj%2BaqZfV3ZUUO1bkRMD569HVFVFhSPzEw84XgvQY6pgH86kU2R89QiKio4UDasbz8hdGacAu7CQuK44fejiEvcyyrGJ9EVm0kfI2N3xQjSBa%2FH1glrZu2OwOFOijsO8mHhV91gQaaPA0D%2FhoQjVhCAT3AMej5VZ9tZvGCkGhyu0kWat6swHJ87XT2iI8BYdTlAIrxTYrnMlBQaiADNhJot5v7%2BKCyd%2B2V%2F5CNE8kdmOVM0sts%2B06IC7z4eYq8WZwHOLWBVzIt&X-Amz-Signature=3adbf93914147412c0b0e0daf47f23f857a7c7ed7f866719dad2ab7f75417028&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
