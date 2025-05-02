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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H43TDEI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCID8zXr26OvfV1b2f9oNihQUxCXzaf0gbizeD%2FF5OpBr9AiEAhkVXW6b4hV%2BoWNpYvXiSc88%2Brntfped4vJwc0xcdnBcqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMelH8xPKYPX0xdckyrcA06v80pen6sIo1PiEzfDBEH9pYJuBRO%2Fc6UuaL7mMlPOanat4FDDzdvuy0nFNModPftkWUXUZdxU%2FOST5ZgTHeB5IyztIvFPKbWSI71DJUzaPIFy4RilDY6N6mFJ%2FUL4khlspcfQ5sGY06rgNE%2BhK14ctkj4Sg4yHBO5CaIhUKviL%2FBIMyb4KYH8oubbr3iRYUQiSSekwmXytZ9Vb77Z9usJPoXOM1rL5uMZqSYzkNBmyJ%2Bzy8fU8%2B1k40fV5GIHG8ulVNNgZQpt7KvT%2BF4Az8Rf54GEi0SLqSu4AYyjbA8eMqxBg%2FImfeX%2BozfVI7tFdqY7wS8bQp2MqMtpJXLSVCJ1SVXMzzx0blGQlid6Ax28XFayT8mi5DmYdwBm%2FgXt2QGBdredc7GbAWywDEBYlKRLtWiMoK5QGWCH5BvltKy2minsQlN50cqFeV%2FZofqAp8Teq86denLXFUNLst5tVkpffNwQ6Sy8iLpBHLU%2BzdeL63M%2Bg9r1LjDRYQhQiEsKiwUcKqZS%2FOBlIkXPBn%2ByzPJQHv8%2FP5DxjX%2BbAJDzFaNswm7Okdx5w4FamP8QPini86vexR0I3ALvI1T%2F1SJra%2Fuvd1iUDfwwDS6AwD2AwCWH%2F%2B3iHKxxJUW01p8%2FMIu90cAGOqUB7O%2Bfz%2B9hQUn%2BqNS76gW0ljMkDJ8RJhZdOQ90V%2F7IGJ6HamkqQvfk82%2BAzO423rehaogJWnvx%2BAMC%2B8eTP9WB6JjQHI56OXDU3Ri7wNZ10xUxiJZJc9H2BSdhPDD8qatodxjplCVSJQE1F0xQG2lht5H2iE5jilTki1ILGTMrbPI2rfZHARdcyPhJT9R1HXXxHLy3Zx3JH%2F7UCK2ZkgSd4Q1RLIE0&X-Amz-Signature=bdefa69901acd5b5f27e980016a3a06f792e2cee4ec382623ed2bdb787aae14c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
