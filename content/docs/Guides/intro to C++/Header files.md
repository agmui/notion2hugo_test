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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICXRRWB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXEEHpEQTxEXemh8CWpc4zn%2FxSXXpmybsPqAIXgBCGXAiEA%2BAuNRDqAV1yfvWIs%2BlQKAj8TU4AWaMmCAxXtcM79fjIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3ZBpvhaBZLyJr9uCrcA8LM7I6o1WPIqOMMVmb300SSdRWk5Jn%2Br%2FzT%2BayH4Y%2FuO%2FEHXBeICq8XL%2FBk8vGwu0lmmlBqIRNELSUSNNIVatiwEwoshIKTFa454%2BT11ao%2FVFkNTPhaAXI%2B%2FZWDNTjITAAO9TfPOTJstZclOCi3uKMEcwpYiamdK2Y8qjbWAMFlieKa%2BQUc78WEdU36XMQ7TLA3WbfVPtOY2c3rnOl9We7Uapflo0VRxvhrrS8XTflSAdTFcOTFOUD4FNrbvHLA31k3FRJcewD8gh7Qqp4%2FRSbkvJ07xXKQ5EbrVqv7kkpjC8Y%2BYnbE3GAC5mEgqY2wBrFwqp0spyBaAsJPPg6umwhcVOxNT785ZBVGXIeGfIZh9iI%2BW9GTcIdelmaNQhVIvt6jNDsogMx%2Bg3XxplQcwNn%2BHJbadbfqMo3eiLlD7NcrE6wON1jTB2HafYDSkYrceOGIdoxlxZB6zw0m9pb4yRIPzN6jcEyTIJlQNHpc4YuF47MDZStQOjzCha1H62%2FfpAcwskIDzyHZDVE1wLmYu3hPuhv8%2FKDeQc3ReODQUnAyLpLhYBco2uI489JxX8WPCuy1hzQJejM3M%2Fp0uTylXKfmaUOB%2BrrHDkSingnswB5F0xmkEoMgTuuunHA%2BMMKsvb8GOqUBo%2FvgjkYQ9pRE%2F1lJaEoaSQmioc%2BZCMvZaqHF9zjMrBm9UtX1ivE6H5NWoQBLRA5YyvEes8Hi0UwI9GMsaYu0BMShu4y3oszNufyfCXZ9y3LnIaz6ivO3mGuHePcJ%2BOZSMMEEGFCRlQ49IWunSqQ6w2LnvZq0cXtzv8Xrjv%2FyKT57qGSxfkviBaUddMerNFBBYo6LyQz5%2BT%2Fd8EcNCoPipy0GOK2H&X-Amz-Signature=0571d38e63abab03a0602f7f04757b84f500f02b1424c1fb8b5e99d8502d130a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
