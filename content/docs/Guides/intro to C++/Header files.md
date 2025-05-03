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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BQLYO4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDJyOkxJGrjQD%2BC%2BOvtFObvqFaPta%2B1V%2BpUzvYguI43gwIgcQrPPLc8JgjeQT20k8yVb5bk6EjBaoOPDjMiGfAhS%2F8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTe2jzY9%2FXKhySY1yrcAx%2BIAKJUgFgk1BWtNYGfKCUx3sTHGc8nZ7RLrUFNYzXv5iqUyefFfZ5Cga1AoUwSTwmB%2BOQZnQNiHm%2FUSWFYYq7Lb%2FQ883JtS8tVsziioCPKD19Ax8PPL%2BkCeLerUXiEDhs3KVAPdEabYPUuSN2aBvpUxn9pvV25CRyG0z84k18vQPJ6MgvaiXU2rvmwiejNNpVUEn%2BD98q6dR40ysTBEs%2BLJdHaMDjhgjg57J3LCHM2LkPwKGnQE6Ui694aK%2BebZiCF6Yq3I82LcgBvKQTJjzR%2BB6PVi3rhnroxrj7ctDVYuyCRNb82C7D0VuzTVa4OCjOH7z0YFfmZVINK2ng%2Fkqok27rOU43XanwoMzKVjK%2BECCscphzpVmbc2NwrbWZKuEQoycQfogDY64OcV8Cys5xR%2FM27ZfSSckHw00Byq707HuDcc7YjgCXpuDbw6rH%2BEXkbjUEpJdRWLD7zF6eWQp%2FJDecepiQrjzpAZioVyfXUMsgsiGsOEoJIpnHI9WDE15EFBbLNvMU7pO48Xrmj7nMrfnDnbse3e7YoKgDxmMoOVDLJxRfwG2c26R1NF%2F%2BSWrE3iOaI8Vev18%2Bylq6PCP4NxHHjvsosySspIcGBZz7u5Yy8Q7%2BZ34D37pDSMNmG1sAGOqUByIB%2Bebxc5DNWv%2FwOYdgm98of9Yh%2B2zafe4%2BcqUsdCCEjUMo9SscJXeZzOwZ%2BzgV%2F2fiZbETSxlywARp16e42E%2FVL2tV6s42n3v9%2F%2BplsZwK9dgnmjG0uFohmyHcVCLz%2BheUAP9InA8MsQkdhk8dmkdecp4icQgt6O8TD46XNtMtBBcDpfPc1b05Rd1a9LUuOo6y%2F80Cm2ysAIjLX1Y5eoiAfHSAZ&X-Amz-Signature=419c4ada02a589ba1a55f0bf0b9fca93da2962928ab871a459cf2883b7809355&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
