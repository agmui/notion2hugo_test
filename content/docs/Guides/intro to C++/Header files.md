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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7DTISC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCID3EIvmGRqATILr7p7qpB4ij4O%2BnZqD5g4a6Jeh1AKD%2BAiBgSF%2BiYg3bg6Om%2BtEkJh5lx55GtI03t0FmRmKUcxbi0ir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMLoLiNqkqllQjzl2NKtwDwJ9ILiP0BfG4%2B7DhZrlilD6hUh9Z9zJwzc6g8O4EcmQDBL%2BmC%2F%2Fhuwy%2Bax3vyIyAaG7f1f0BJLIVs7N5uMFnbPtXuh0sHgZ768tJ0jGVUuHieN1ajNUAMlbbolurfOyXucxNela%2Bj5%2F8BNRC2v6T%2BEmhBb70aaLqeEHrC1KHJPiG1pqQpUYYwOHCZehNLckK7YF5uG9PHtgsEay94xNMt1EThT82u1yZPvjAofQOk5PYdVuq3%2Brrs7j50St0QpPp9suhV60GFWywAfgsKtC%2BldNAwoRAX98vMYz3bdYE3eeQFxoj9wSGME0eB2mwj46s6%2BrX4yNpnGGijYoLsRguFHZrThk8IHNIHlr%2FaQR%2FQOwF%2FpGGp17Qwv4%2Bl7ByXw7czd31cHMffrxF3vGIcqCq4d3kLcZVqxJFW3NW%2FpYrnkV%2FUeeOKS6HtYSCNYT%2BsGX0zJsmexKOWLMmFvqBoKCRICoEpf6pBmuLl8y0XYMmkd%2F5ZcRMiHVyrmoMvQvLv3109pcz2RMAe32yftfvkmvUqj6kU5%2Fl85YvgI8c%2BTTJIEa4YvpCWt%2F4DmFQThGaN%2FmavkeYYK4C2uPcC2T6zasAWPQ8qgLmgbqvVxkA7%2Boq7VjZdGMYOPR%2B%2FmeCbDEwl8jAwgY6pgGXHZVDqayUIa6xqM%2FQGOA9FB23A0yIGs9bvKFd4OeR6JQo9quXuQa6sQf3z%2FUnN1SBiYsvDc8OqZY2picGQk8oa2dIfJGEQKow8m9Xf%2FZ7oFhx%2FwnfBiYj52izHmrete636FGqiCAFN9P2%2FOnDnCcKEcRrBCHnU9wbXoWonXJiEy4e%2B1JBoIAh1HKktZOfRzQ5Nt93c0rb47P%2FJwiFw97o2PHtTofB&X-Amz-Signature=635a70436d9c0679291b7e320d7942078821e32a896f8f22fe3bcd9c999053a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
