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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ2KXTQ7%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIF6BdM6ZZQg80mufQlhOvaqOyScMNZ%2BaSopuOnwqgxDbAiEA%2B4zmQC3uMSSRKnLdVjtPGrrLo4B%2BSF%2Bzae0m3E2BrO8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnUJBb3JbWeUs39jircA%2Bpc6UxIG%2BHtBMwLzuthV3EZNr0nF2ycNkZqpBX5F4Xi%2BMd1oDFaROxBmcPadKybnA3q91s74O1HDFjTD37rpMYRVqzMb%2FG73CknBIq6yu%2FNSm5xjpgPkWiCQTPe6Vg2i0rbaJczAbppuOSF%2F4VU0zjA7gTCu%2FubfYYePncb7HNaRW4kENAq02ImpCngb4Ol7pKLlKX%2B5xysOmAg5qXeqksNwpfLt1J62Q5TL5caZWq0JDg6NlPOs1v7M3XGuXW5ubUNuR8Ta8rprxcEHM0WST5h7JcLU%2FDWUYjVr%2B%2BUmc3w%2FwDUHI0MQrdg4j0PI5H%2FWEKFsrTq2Vecgvabm2J98toykQeuQjtgHB0heJ56gooXrRPf28HedDrNSh09uu9m%2BhhrKwk28cp7e9jeX28YYhZyhCVcoY0rsWsYHQciTjcNfw08sTxsg0bInQ1Otag%2FhljOXoTZjBqIqJ4VYdR3DIKjnVT3WmNqqHny2h%2FutEFaDyXSr7xPCDj6jGbksTsa09wVajZLReFnC7g3FAXxc7JgRXFEjbjOJNnqEibkp%2F70WAxqGEKNPvk9%2FpwqkGbdiJaliEZoMi7hW6M%2BIQVxOydIJ%2BIdd%2BX1wgh0oGTYajKpU6YitoYMS2NmcgBwMJvo4s0GOqUBpe%2FqqaUhlcF518HzJYfHx%2Fh9JqtaS2Lm18eErpEsKeQMY5Ffxvddcr3vDvevOSA1a5g3NxYi1rsdZ3lnczwiVCH%2Bmz83cyCx4LR3ZQ%2BBAtkxxWBinL81JZHW%2BKIK1EPZsfbRi%2B08ZNk4u7NeEGrEFGp3e4d2kcD9OaKEdzLDvcxkb4jpsGfwfq2E%2BHdsOOK00b1JvM9N7tOjfrv47i0zzD6Y8cUl&X-Amz-Signature=c01d598020470462636eaced91a4f47c563be6ed97f8c6d27df40efc52eebfbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
