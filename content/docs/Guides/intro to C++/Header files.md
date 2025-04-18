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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2QHD4Z%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBSMrMnd1ePw9sMLy74D%2FF19AiYV%2Fqb1AuHgri7nKzYAiAshuHb0ZG6goClkqLpb5rM6%2Fyl7ma%2FOEhbYuoXwXGkcSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0%2FdquJOjZzLLBi51KtwD9zAE8liuLCwInszl4aHNC2hZQnLu%2BGErjowVPrb5Eptifo7ocmgQJjQwAoLm23UFDXAiCqlLOOTqETUS00NZE4g8lerB5nSMeDgd3F8GvhZ4leSuEQw3IioQi16H1dTTFyqu1AFxw9rOF8xOp66GWOrJmvJ3Y03yylkiwse%2B4RW7T5LhIbaHjshfQittysp4AknWVuvpfS%2BfBzhsylJUvEIKFxMikYqV8om8G%2FNEE2c0HplQCbSv8hGwGKI%2B%2BqtnGgaRiA3Nzn%2Fb%2Fb5HrifK9JA1X8rOU%2F3P%2BQVwZFqc2dm9yZ8LC5e1QYh%2FdVPJ3HjiZcpgz%2B4D3HkjDHSL8Szz5n8UGPvEyWvh7dKGFLHIA21slMjIHj9uAa0%2B%2F3al2nWLLkraukrhBg8FfZaWQCc7ayJNhv6miEukPOtDFtL%2FLck5%2Bb0BJT7BqVkvRz0zYkTasTBxfNxkq5EQtXCeRsFmI8KFTgPVEYeAVZtZorAUcZUdHYIEQ9MrWFK%2FsJLM2iW%2B8Iz%2F23yHeNfW07%2FzUKBLJwyy1uOyV3Q6ir9CxyCm%2FlqQ6XG6lCGgX%2FkKsRrr3InLwdpdKhXjdm1T%2FRcYKgQ2jFruKZqvICwVM0AHWreAH3BHytObxJ3QJuoAk5Yw9t6JwAY6pgGAmRe16Mu8FIO0PAbd53CQ0WXesDc%2Bks67ni9w9cPCjYb7eZkLY3%2FJsJa0Riv7qps933BE7bg%2BZzp1MDCAtvPP4vuMqhS0Z9oGMifITQEQLpsBJsHx6ueFnymvXQvBrvGzxJHYDP8Qv5yiCnekITa3ORasNksTQ6LBQy2lkpt9HLvZTtpovnh%2Fuq38IO70BTeyV2DejMnARTfeiUHGhQKn5i5auTDh&X-Amz-Signature=c32e4606ac4c7ee8e11c8201b151cf39b31bcfeb2ca77bd394dc5f3deaa99ede&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
