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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVGQ5FGO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZmw%2Fn2JmhTDl4KtqfEsbZ%2FTqerJbt02w%2FxeGbyl6xQIgG%2F53NG8JRr159hO0l1VjbeeZUxHAETLJOqK9VIL3Ujkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNntPIGd33QwRmOfXSrcAw2KAkk7o9rrXYuESc5idmjKWYM%2BmVIoN%2FtyrN59uwqORdYolgfLOPeoAZvHCYQLnL8NGNDWwNGuxdBZiJcIk%2BO5tMdd%2FPSJji%2B%2BtpTVKVozwf%2BP5baantoScOExQt2CAj8zS4gj0iku4Dmqv37cgiqyArJ81TysFkvQxqZ0j5K5Bb1pJqkZX8rHBPYANfcDLD26gTp1%2BGOiWZc5GQr11AZ0s6p0E%2FJwFJTLVjdyCyXi6Xeg%2B7Pm7B5YA7wqwQwPr%2BjxDH2v%2FLQ%2BVwbHVJq4xX1s9O7szGzvpteRExWvkMKQ%2BOLZtNFXuC%2FrRnp5SyD0s%2BgIy0VIgJetbHxcFhblJXOkfC2i%2FTy4B2OVFvt7u0lJC%2FFNzTJAzL2TVww9VA67ca6d%2FPk54VjNQGgomhQ%2F7%2BOCF6wIVo%2FbA8AV6OksFPuwd7fWic77MCWxS2Mc5E25MwJJqis9hnqKU%2BrCh%2FmP3ELZILvOIQ7RSURerfVpd9v4Wa%2FCCGPvxaB6is%2FQpIKz%2B%2BgU%2FKpLyW6Jyk19y3pLMqSZO37NZQsXlAs6sD7vDEqDBpyIIzVDUr32h04bXPfvlLqp7ugb%2FsmYB8cGWzBEbGYdAkjjIAc20iVWu9oKCTOHQIO%2BBrYMnxyGzGeGMITAyL8GOqUBMt%2FI%2FHd43uDaJFE7xpb%2Fcp5D%2FH42brlm2wZHWME6lyuvIlQvq4PwJioboRKNYdMc8FCi86ZEWjSXGYVXZro9ipEqkU9JsHVU%2BVwsGwwoqSG7M1L3u48BiwiR%2B3OG2F8bpI305niZ0gQd7sTFNs2folgxksEQDcXOgmjkJ1ozmZwBOPwMkWPZbK5wrYRu8e2HE2QKxGZ1Dw3vdwpoUUeckWPLFLsv&X-Amz-Signature=7d02edb4f0373f4b00c57b28d2ee92984caf27ea7d0a88cd53b8dc7965cd09df&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
