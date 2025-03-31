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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6VGMCM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIB6aR8RtalMwvnAg5x73fAuk7vPTe8IuYq5O%2FgXwS6LOAiEApT6a%2FNRgqNewHZb2H8RfRYPynnQIwGJz2TbCdpugOfwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzVCGDMrffcS3QNgSrcA6VMuMxIiMNSQ1vVpCJ7%2FdTAgsXB5y4dVa4ovk1IaB%2BgleF2k2WwMZTyETDkRcEN05ZlV%2F71AWjDW9nIZUujBh3aKe47e8UGZ%2BMGca1ihPOZjoK873cUm3QTuxOSDX%2BGJyH0CcRpBV031CMU3%2FF2NFD8%2Brmm4SOaGlsxiglMHLU%2BFb3V69ZZriADjA9M9wnv0eHYE%2BJItPYk22Zb4UyabwbntbfswbWNTLGFRgfeAUkT6sQBuVd5QeEagcQfZY%2Bs9yQpKS2vM0YRCEtVGtR6q%2F4sUXzUETHZ8%2Boj8kSQaUSEVTIvZ%2B7JsRxZQFdq%2B4wrb04cCUwKzhfJX%2FZeo52b0QA7vCK%2F1LtKRfYgs4ZxpOKtLfXgm6DztXz%2BhIZ09U8lLkkZKIxfsFibubUScXuCuZJxqO5D5cBZ5PjvYoc0Wy%2FEQFc9NYVzrf%2BL6tpJ2zeCjmp9UlervB0%2BmD%2FSIr1El5uCoIjeDmQfvnTyO5yvPclRX9Nhmm3EA0x6jlQijND1Ao33YBWqhExZCp%2Bbcy2uwvPBZjkTGT1q%2BdmkLdMO%2Bs5P1nkZPh0ZXCQ4XEU0IASSnY8g9Lx3%2BVV8wPF4KhZRHtEU2qSJzhXpZ9jFEwR5m6JTNnGFEt3a%2FBs6TXdAMPKCq78GOqUBnXKchGKfV2gWvyD55%2BN8boRCwmq9C2wgJ1pGW5X48oqXw2FEma4od7Ded7lJ5fUiGHyo9aYZMzLE8NrXdcXRxBsbwKK%2BfssMwCXxiyVE3izk9snHMgg0HmFHH8j1zY5Fz9GHn7bkKzDRPb5pCFYLgmTVhB%2FOjam4DH%2BRlHx0oEE4M4%2FQlqTM5a3oEnpaiYZJ6QhoGMrcd4VSoYlF0HIoEEL5qC8%2F&X-Amz-Signature=7cac5fed5a56efcde58098266325cc2e727788796a3422763f64108b1b1d5600&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
