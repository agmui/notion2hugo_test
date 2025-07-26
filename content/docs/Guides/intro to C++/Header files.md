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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOEHBXW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQClDz5WXVhA4b0GsOWnuazZu0b0JIFX50PZAl133alBRwIgUh3DxZ58OGTYmlvCZKKJxRaJ5pv4uBEe9Tx4kzBrUWsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAz6iR%2B9aE8Oig9zxSrcA207ikuMfER%2Fh0ouTWbB2uisajzQ6xtdJWFz02Bcl8TLQr6jdnSHur2oBNUxBOae2t3DyjXI4Ve4c9GjG0izoQ5Roy91ojT5ip%2BnUAAnJwSJpQZMQI9g7X1YdPA8WKdbCFdr3DZWKi2numSRdPXhkVv7fiGemwc5woi8xmeFPY%2BPCPtH%2B9gsxZjgFvKajtWLNfFPqETQnSApqN1agTO92ZGPLoJ58f4gMEPDlQ4H86HeWjKlZ4JhxQnSxtQI9YPQizqug8bgZLiXCdwTI2FzeUt34CiXCeLg51MmH1ZSy4fgnRNwdVcKmx5zF9Cd1kls3kFt%2B7BjH3YPqpYvq%2BEy0FJc5mMi8bhMHVN51uCImnPMW3AIzizvU99MmFkgOB%2FvjrcpMqfUrfG2QqjZB641iwMNYNIq72mj2SJIahqhjl0xarZrOBzgw8x8MTUt3vJJpvAFQTJa8xFADXfhBd7uSu%2BGkZUT8M0R4pvOqoPfcUc1cXY2FDcWF4Z83KiH4sFP9WnYz6fOJ%2FTRsddhUJHtF0GsNJy5I9cFUsojFpbI%2BH8F%2FI9szy77ngojeHekfrSpmJuGVQAa6TqFJKG0kuvs4XWERlv9l%2B8z075Fuef2MiwS3MVn25qiVzLKX0heMND6ksQGOqUBwX25ZaM6GmnlsCzT9nYPVnQfcv4iYRsAqw%2BSqorzim0Umg5AU5JBq0ex26J0gZ42%2FDElcfaMsQ%2BfdTBurk4IQ69woPlTP9jENg%2B2%2BO0htq5jErgEnCRaSAnvHivEJqoonNfMu2F2DPHOzQomuZpAfqKy%2Fz8mwGTFSbWS3oQ7CnnjRczR4Y2v%2FAdOonVXmtiYQ5gX3h6NueFtbs9sDYVZMMeeVesH&X-Amz-Signature=d4eb326dad960ddb4ab8855426c7bff2d8d99dc96efa7f751dd8224d1f45a425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
