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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWTQQ3J%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICkwD1d5rsZ494ovfXHEMTRTbrU%2FY4vQwah6iXflE2PCAiEAx5zqK%2FW2ES7Okr8wHMdwc8nrW4u9e%2B40kyICnfrcOqkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN1xO4ec6bKCkFPL3yrcAyECThnsK6ZgwvwxcVTQy7m6pAmakrA8FIPs1TqYrGmmyfAFVqKMGDNfspp2A%2FAavXggD2IlLfG%2BOdZiMYqZIZYY6gwSpRFW6FjV3ZT%2Bp7ZI3FY97xu%2Bn1ltgKn0gQioBX3WZzxBxBMZaWRORUIphEasba80Qjm%2FOE1oec4vqmWs7R0N6xnx4rkRolTJIAsy%2B667QCH%2B2Rpd%2FXmIDyqkC9G7e6c2idMp%2B9vnLS58CQnnphx5qvvsuF2buyAuuRRAijxJ4Kf7cW%2FuE%2BSoW3B%2FtCqnGQx6FeflXKkmEuybt8J%2F%2FEmmE40rzr21YFeaBQZ8SYqLI5DVF%2B9qqdy5ua0BmJ4EKHEjrnmd6wYQNoVhRGpAI37xiZ%2BvYZP1QmrT7Cl9hBWkQCjN2ypYTaSddr7HJZkynIrW%2BQGgRU%2FCp2gHRrf2g1pXQ865ZmamCweIkIiWRG%2FTFrD7TJhxHEYbMJDxyBu9sdZzywpk0AnwLBPSHKEtX4nu%2BCF0WuQeJocm7dLT6LizcRmasUNWD%2FqKoxtyzVcTqoQdPaIjUFsIUPuhQv8C%2FUgcnrPtl60WLtSQZtVSbYIdHH%2FMHFtTt%2BjNeRPIGQPeZURYS0l1Txj4xeBxoz60zNjoUYnlVYu%2B2xZJMM3u7MIGOqUBFOnRl0ziZvhjEC9Qk2WWBq6xpaErSLiIRlPgQ1FWPcoR6E66youZqpw0FK3QcEWnFldTGGTmCJh47iYJEUOS%2F8PgUkj8b33F5rDPWAOPauwLNavPzgG5cKgZrw5vOE6nv8AHX1XZmuKbF48vCTKIzWQI8dhc%2B%2BFZ3UWPhERio1uSJmKYit2oaIMMkfBNm1SV2CaPMz%2BIkkOk%2F9SCkwJRhfUI4A0r&X-Amz-Signature=70b27b0d93ce7be03dbdf3274348ae6e8c52d8916596a832dd8008e68bffcc84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
