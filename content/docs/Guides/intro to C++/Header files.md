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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5XEJQZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaVKtvQVrBHpLG0FgLX6o3T8cN7A6agACcgZr%2BxHZYyAIhAKVAM0LsFPVP0Ui1G9IdOX9gOuBiO%2FVbVA7MamM0PHeWKv8DCH8QABoMNjM3NDIzMTgzODA1IgwWNweSzUTAqGFVeLEq3APIgI5eVM2pwMtEKIuiCckcvOJqBGatTIo5aubsyRsn5C%2Fs8ZtnpZZFapxIvmh2GXWI7QN7EFRenlvti%2BlpQfzO3%2BQzRU7P73Ts9O3XJ22hnRQ7qeX89MO3%2FTbSrfxcu07s76uxsaEljJ89DaTDQE5z6lBaJfKBFoSAW%2BD01npdwrnf4ubWZgPh0%2BOjC2iIkTg5D2lm8Nn7BgjXXNPIPYsj4IUV%2B6XQq8RqNT%2BdeUxJyRs%2Fy8B59b5tzkNbii6%2BEI3Nrvm8oqtdrjHq%2F1JEFPnRyDAjntM5nauIFsFwB9Mm5nuz8H8GYREV3wuIQNN8VLTVIt6ukRbZCaqcQnIFhZpZyLBYR9qIS9I9ZamToNjkfpwQvfmMNOx3nAZ8T05Q9%2FnpbMMgaNCUruF4jDgAw8gu4VrMYldgF8PKXfBnIDmDrQTrgxDd%2BwMiCG31dk9zJP9PWw9Bqi%2FHWWZ9ewlQOCnysdy6fUX80HW8toIbgLfIQvTTQvJV9ntMurVaOLJP%2FS%2F9tOKIxxsBtiV7JniChpMEuPNdZUpaIeeuG3S1afxhnLOEfiZSv2Ncrh2JagID7PfbX6y2DFyGk1MqsMlio2ah5vet8BaQsY%2FFm3DIGSxThxFmi2Whl3rRFvyVOzDQzsfCBjqkAdDRqyq63OijtGBTXDTv%2BcS19ggQdIYq7PeOReovrSP4jDk%2FvYHxiwp5dxE9SlEII1S79I6eEZaVwrbclozSiwqZ5ZgbCyJtFwv9tKTC5u9ZQwdqo9qluanuJjgv9eo6AA1LdWNI9h4D7IQ3yV4MDJUBKCG9bKsNrk98kozuw4%2B%2F59AhNfHPtEXfYWYeDDwrsM2lvYIhncu8ZGEQ2g74DJaOhUhq&X-Amz-Signature=b6fbc1be173fbee7509d9934c4ed20072395c98dc2c2f3146721cc0db255f400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
