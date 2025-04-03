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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKKXZ2V%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCoWyg4f58gy5zXuOJsTT8YZNqAUN3vkzDXp%2Fhi58Qw6AIhAJUExlJ3gh1zKSP%2FSclRhgqkwn1vop6G85ew%2Bve2rblwKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1PkHVN37hcGsC0u4q3AMHRKiggjSRrUjAS%2BxhnvTWLinWuWAeKygYaXA0a7eCAtEbL%2BHW5%2FN68VciY0Ekw62529x0BG%2FBwyD5FdiJt1FCmtpwyEAWo1oWNExcZBYVB21xEYq8G9baqjHASUgpi72wsmV%2FT8s4wR4BK9Hc%2FKBE3eUcfqrQ03bj1okgze3wC%2B7rEBCf4V%2FL7b%2BxaMMoyg6eOp3IEaktSOsyeNvgxbyOgkewSHgr8zbz40D%2FBx%2FbRDkw%2BIdPdugWNeqd4URdZa3g9nREgXBFZO8LbtfIIgzPC3WFO4bToNIAPNDUqJEKrdZvlKfMp4nM9pytDRtu86qkPXAyU3Qqb43dLccQ94w3KXHBsyU6i9tekDk3iSZ9fvW4fclDnAdsAYlPJkO7Dnj5UmYwMsH1LxqfzHl3ugzXOKlEoxOtsh9RMAmOQXzvm%2BX7bHG1MnQ07908dj5qzoZ0Xw0zNG%2FAto2ZdDRPHrsHzuq9TwDBBmOFtAXK8yUwr3xNgvpCZ%2FJZI2wgH5qCN5gEU9W%2Bhk%2FHqCUaepFw5ppabeYolhukOsszdSfv6LxBxEXtqnUl9geWlnUcY5Ld7YhlPoI15K9fiIrWQQ4BkV5veBntT95FbJsFZt1Qz0%2FK60x7ohiW2UAoTEetbjCNrri%2FBjqkASvp61qK4HUZV0sBKvZalNY0sY0%2F8WjMWDcQvjESfNe4QeyasvRlnxlhvGMu5im60wDoirXEwvSTRYafQVhZnQkR9naKufjyMSyBnTmeaVKLIYlDg5v8zsA%2BgOmqATgH%2Bld8OI%2BPC4a5NdhSPOd97PKVhQ9xVb%2FrI%2B9qqUBECcEirOX7KQc9RxiLbs7O0R3jA7rU0sD39fy89UbIuJfvg3RMXCw5&X-Amz-Signature=4d515cee63af1962c4bd7e393df6a4b7f918919217c71c7933148bc19dcb7757&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
