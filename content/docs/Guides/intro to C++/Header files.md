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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G5O75BV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA97H5KqHSryKqIlTDv2XG52%2FAHSgr8x3Pw0n%2FcKk4%2F6AiAdCLDVareP1WTAw4Ki1NjJN0YUINAnObnH5zFBGrFBlSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMgi%2F70jfEXHZZ5KADKtwDK0SGPt0eP3Gg91fAsb%2B%2FlIDxKm41O52l3RU1dyxAUTjHffOZcDEC7DKMvKpmZRIRDLruLGgGQtZZ9qUIGvk0LuZaiXfzWe7IsUPWg39jrcj%2FLLtA%2FQnGx3V0hxJbDzJnPg8GQnAlT4g9vDAGXwF9skWZY24ukEhschizF6QJhWvUy2YDYmYSfqbBsg2uX280eSw5Uamy0TCt8C12MiW6T6UwREgJp3ZiZVo%2FewkAISLwCsYS91lVCeXc1OLh%2FYyRrG3%2FeHkdFoJhAyndao2P5u70gC2jeP0jQCNBD2hKNrsGOHaJTVH4jnRzuCbhBCikFqrdAPCwRKsN3ut83KgV%2F1Hu%2FoD2ZoqzLsaPHQboELdabfUV%2Fy139C4OCEq1WgPytm3nYksecbrmNmOOyeQTYLTkROFwxLmjh4PLwwWeYBFu9UbYvIvjfjGBTZIP8Obo4HMbUeqmP1xiFJ4Vkw2xWU9ruo0e0cW83i4T5r%2BKtJiQYybygX7Y2Vhs%2FePLbGqBOL%2Fon3MVExnZJzsKPlljwZN9O3CkyCwC1o%2FXr1JTRjMZLc5vVmulv8POzLC8NHwOQZ4r4hmrhaaXTrZOb8FNOR%2FYIfHHUbNVFqfZ805wyqRxDgFPR3AoiP9cp14w8PqGwAY6pgE6kZKokalDNqjE8MMf1Aa%2BNpngUlEt8xJc1SDXgjX9OJYUEbmDivsi1X4V%2BB40n8idP1B%2FG01TFxaplEkBJF%2FPjXqIhA7nzDXC7DzLVDZaFK3M9XuH%2BpanyIaxD7tPSiucZlhdzXJ1Kf4IIh%2BxXXMP%2BRiw59RMB0ONlTcBFUaZwjYCAaw5nv8jgQ6OLEl6URL7BMFgOb7D2dZNv93M4zwCT5ZyIUYt&X-Amz-Signature=2be12316991ff10426000a23a576d72126f1ed4089ba8ca01f50842e70c15152&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
