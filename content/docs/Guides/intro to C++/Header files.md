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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MMHGQ6I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMjDPNVnhqkwD0wI1R9YK%2BHB4fUaF3lWK0kVpnhZH1WAiEAqUze%2FskJ7raJ3%2BO77FaVkUUcLHosYJmozIDX7qmQUx0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9xXbYyCaezFtUjxSrcA%2B42KN%2Flig1W6uhxaq3QTbPJIxJbIhAru4bU8sJ4vSyLmDUss1w9cWjeYYj8y5N4qcJFPWSTs2gtFBTYxlAZhx3XnrB%2BkRaRlr31r1NUIYThuBW715weJhdHSPZweTOFp1bloSQbgIF34RJADZpuB%2BJhqX9UertbGpYIZqt9bJ3mEX7bjPeKLyT%2BrzUI3Ogat%2FuUkDfXWPYLdgVgwDvNc7qYjNQXuJazgdSvRbpmk%2BEtpwW925yVkwYwphPldKMVct1KziIbqVqoKWnOTE5%2Bv5G%2Fx6wE03e59r%2BD0n3ktbfGnFrBJww4ciZgNBzLSnMO1f7b3uMDqzELCBU%2FiFKlchA5ygyyf3OVgHtQoTZr4SM9rfhav%2Bk7Fvu9PGozGEqiuMI5x4mrjvnvgjx2QBh6SvX%2FdnkyDw80KS252GWq3cXsJhtLqTIwMJIacDw1WImHNcaBrjjCzBqZl6MTlht4u4%2BxnZYlyaD0lo%2FpynTxW726%2FHRoXqFjuVaiLKIEN2p6FQ66RjIVfdvgTYvx6ONJneB%2FMQmbpPCQJjnntZmBUVLd4iSHKbWFD1aX0N5G6Lqa2%2B%2BLIYbXgcu13BchojVahBNegIEzkR%2BXtaQK1k7YHCiNjIJTniGe8HZtQ1oAMPC1ssQGOqUBgliqOt%2B4hmYnDAGYzcwkc4nD2W5xOofxSuzYWh9%2BI%2FyOWk%2FxK29yxdYRTPanuuTKGTZ1h%2Bq%2FPTAMxJSL4gkrSa04BQTMKo5dQ5s9ZZwDcZWUm3GkJ%2FousNyhEsOZoudQSVYIvlZTNQUt8wGgF7Z%2BbxvKBkkOIUusEwtBJ%2BHqgldn37A0PUwcEf6ernLQgZGypzUFwzMWNBXh00fhhB6jzrHZDBJt&X-Amz-Signature=21db5fdc7faa37ea8249fe62eebc7f161af79593964a2bf2c6f222ff09df6ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
