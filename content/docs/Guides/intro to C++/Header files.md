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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHLFWNAD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIA%2FxkCRQMlOJLKrxPBD079vpnJOWSBn%2F2nTnKJTZt%2FnZAiAhV3UOdBx5iwFEXqSc9GLmeCHDRUfXtPjM1XME5JUGhSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcaRS5Dt0IeWHqJGbKtwDHwLgRZF1yoSM1YfAmf5QrfGOiAhbvrKZpYrx97Ub7SJhkhWIxkMEsmO4%2BxHWHL6g2yAlY%2BGbGZz2OG3CvlMzyyEhimzpHRz3xofgcl1cDjo9aYLjTjF1gPzZ0w3b2GybYiRihZN4KSaSL7gAm12T7JJ2jUFapbl4ad7OhxfOUELZiiL7atL3lXeUqxLl6eLS1vPh2EyGIIA%2Fb%2Fh02L4WJGIebd1d5vDfGukU4Qr7QyrBECbf7f9uV0ZmsvnQ6YuPskbwiQqGkZlmSZZEDujCcwz2WCk%2FgmZDcumiqgCcNlSb7vm3vaPLNqLmx5yUAZFeCEIbOAuX59Rcg3BxCSZXXGB6R2TRJ0IipUyH5tgVIn9zjgz3X92Vpqyi%2F3QQeHXzuuo23du9HpsyxlLDsosbivPoXUOKJMcx1xPBi8A98A9mmB7xlVP5tG0HRzUAL1nqMVVZDeaFJv%2FxAZxibzEjKVkqAohJ1Pbg9jqafozx3sXz9I2n7A%2BYcln33T%2FlDk8c4AOrzgQ9nH1ze6AEFHqKOZKeK8CnWyUJwrTYcbaVTHy65My2jHeYY3AKQEynSrNQryjOCsinQSM5hz0wR6zhbF%2BlQoVSyczJ%2FCopzx9CFyb7ZJssEZq%2BajQyfIswtcvKwAY6pgFrmcUtFSEYkxqoxX%2FaWlqdDEWnTxEMS4ldzeKB1LFaEJI%2FU65rrOK9TMT6iMUtExgGV5h8tcBBmK7UA1sTc7F%2BS2%2BZiTXU9SoGpowCr%2BSer2drfon6Hyq29deiyga%2FhHRMZanF8L0uCqUhZ4ROvReD6w22iEX6S51W6YybsJxyxWoDs%2BQpoVcplAcUkHnkYbxj%2FrWYIauW1kp2V9x%2FJL6ysLsEZFIf&X-Amz-Signature=3c7bdbde4c7c58be97460b0ab22193fb0b9ca51dcc8a8e9e78643992f2a41fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
