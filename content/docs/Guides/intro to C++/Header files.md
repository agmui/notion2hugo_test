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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQVYGQR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFTpNLRRrn2HrAljiaU2lB3ByMPNoBABTssXbfM8KFFHAiEA%2FPquVOgPmQ%2BYPrV9YGECcSUvMnyGSGeWkKVqbk29KBoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDA6Bo%2FMXB3vzssYTjyrcA09U5Qg%2FNysrxiQXOjflDuPTeGNus3Bvg%2Bth46bL2O92P%2BAUO%2FkjKy3su6L8dCAnKwdyxCFaIOfS%2FXPS336%2FrOUUfqk63vRwDW4QyyWbjm9%2BGMd7fjyk%2Fuvm8OGSrL2HPbL09dIyl8xUJ1qtfBgXP4QjM%2BqR%2BmVJ0tc6TzSArQFtWQyZdSQmRL6GouoVN%2BtRNA9wUdlIW9isAkU5cCe3kAKsakuU7EAF6vFIdN9%2Buj1BNR7V0r3O5d2B2pw27aQMXFVveyJEoCeSzI9AHFu54Mbk4QVzCPgMmbNP80HSz%2F9zL82GKQjVD0Cu8gyCV7LqJ7WOGz6k%2FVHFF0ywOlkC3lELr%2Beq8AOYftg37D1o5WurALgd62nsuLM%2FzNo45VtZkdnzLod9L1rDsvUZIjFodiKCFAELtMUUPkZqJa1G9BwzM2rOhacHQX1tk%2B1YTuBCdjU2mS%2BXKWHf6t3EoF7CEoRKIAU%2FcuUf9n2a%2BwvRJnheKioy95FLqONtX1u8K%2BjTYhDKiMILyMJPtMItv4vfLhCewEN1rXVaZCuAeaCqXkB9HeYAKHzew6pw8mJ9kixlzkywLjzOYzGTc2n8rfPB%2F84KOM7k98q0I3QPuSeAPJurIvIYVJf2YOEeMrBwMPbbl8QGOqUBXbEH7%2FGrr7JQ1EcpjRPVfJSWhOsijgwNtXQANeWzKzSUguKCg4IO83n%2FiuYbjuwOvXo11NPd6wAl7v%2BKkZJ5uXkuLwsl8hE7K10tIfZvXo1ZlZW8%2FpJQyKQGXgMvpMqCjyfUj3RgeMRNo3alhCGw%2FYiClggh%2F7PZ45hkjfhX665yNhPrYqCQjEjZBfArFBo1WW%2BrQqYjeUofrC3xdSG%2FjZrZyArC&X-Amz-Signature=daa3d60d2e064142da77bf7282d68921325794c5830ebcbf8dad033691a66b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
