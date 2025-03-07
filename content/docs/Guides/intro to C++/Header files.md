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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2JQUU7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbV9jU5Gc2gJZg9YYLJH%2Bs9r2kL%2BmLdomnqctCDM7X8gIhAL1lBViVd1kIXAEtgJwD5BiLKifbnRbOiZqvhw%2BTFRjdKv8DCDgQABoMNjM3NDIzMTgzODA1Igwwt%2BL2xXiDeAfwCUwq3ANWSh%2BMyRjGdvo0U1t0MVb30cYiZrdFAtbj3IWRAo1xj5KGdYDX9jxXplUVFXnQo4BqddUK9MvxlZz9PwvP91cGbJcu8nkrCYE9%2FgLixUSf7rxDQfHg6TF%2Bhnm4PW78gOBb7EktcM7AEMxTjOy6HbMdJECgXkMXHB3ckij8zU4shI92xSjP0k7Mn9ZgWMsSajYwhT8DtSvA9fU57YWnn47XjB3T7WrnDjafpY4Zj3idcle%2F3UnSXXWQ7ZnKD8sNDySmb5A3dHB80vsXNTmr8q%2FDqEvwzT7zz3RhoFksi0xOhUUqXvyiWkmYPq5Bm9nBIgVwXJUf0tDIT9670cpfx9CP3l9IzIciFjPN1rEeKs6erVzEbXT71d973Qbsn9ggHPwFou%2FJXEwrjdiIhtQ1qFs0%2BW0oSL5JitaVs7ZTVCuLA0QksVe8SfAjVlBiArBVFtLpxqoEUyx3%2BOrM63q9yxPQ%2Fti%2Fhwftdi2JDjJl76dDhb1pEhWB0vNHgyLoM8%2BiDeAsxpbnKN33Hk7TMSbylaFs0MZwGBgqbW4EVwZZVH9j0gAdiB58Bevhzxc4QVlglUGO6j6wLiNXdlY5tTmBjgFul4abAkYrc6c1q4UapYSZtNqgS4%2BlXrrdYHTHHTDryKi%2BBjqkAdagg6WxlaExvuPB9U89cfYb42NTXY5jTV6MV7Wyg%2FCVorspMe8ngL5wWA%2BepAcwWDlpOHCQyiDQPJIqNJAJewMeOm9o%2B5wpbvkjCxTdJf1ULrq9aghNpdBOy2VPMo9sGlP5xY2CqGQ7E4aThb4ZcUssb3jcQcyefzjLT2gRJLN5Z3b33D8wy8qttCoq9RKVymgUof1ur8XpV0ChOgcowndd6dG2&X-Amz-Signature=546fe4f1a216b30d7ae09049d3df56f1da3c2ff2ed43c17231c31c37c3aaeb47&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
