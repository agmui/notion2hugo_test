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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV4LF37%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD7m6RzCULIwyLXax785EjEBxKfhcBMY5kqA%2BPFcOMNWwIhAIKHi8mZykkABZdifmbdajHi2HtbiPy2Qm2mIjhkVbSAKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1irAWCvzegjyV4s4q3AOewu0ATB%2B1x9IxOk2cAfWUTUcCf5UdsXGnbeGCHE9jR%2F1Z7%2BUT6A8rz4IfYlBLnYQu8o6ZKafh%2FsOnD%2BRJmn6kYL2Hu%2Fyq6ipUkjXxmJVoeccoWOngkKKS7htMcWNrKYIr8L3ls1guXvEhd2lP%2FZZDDAiRRulOhqgLfimMwlaHZ%2Fn9mxJQFS4eISSpNp%2BIAq9jbaCtp8%2Bv2n%2BfhhaNyEVeLt9hnxpkADxAI9OiQpLQOmHnf0OUQzwTvyH6cMgZNV4Vjr3AYELxDQ9wZ9UJWrTVSDaWJJTsltP2X76Pe4A%2BQb6ajNchrcjkujBZ%2Bq7HPxxyQ3admYJPKnrfDvsCX9mSVK%2FzhlNmyHAP%2B9xX4ENm%2BRxKwtG%2FcHYPhfd0CrFyYom1TveCPpKA4DKYlOD5TKqSUmPMkYN0mqR3SONQZFRmFdcE7RffXodGQLaMBwKpLAKobJLSJmNU5KHWUChCSVY%2BSzJaA%2Bw%2Fce166iSmabF6OFOHk5tn7OGdUP8pAo2u8tXlJaUFXd6bcYXHwGTuDVwQlgT4QFiMcj7wP2vQAUc5RU%2B7cZ%2BCA05K4GMYKZngRgNA%2B7I9uyiWCQGdjYFeLFDt4YjzvVLc8%2FRDMdFYRC%2B0MCKw3OXvbg%2ByIZQ9ATCMx42%2BBjqkAdX8tKsNxOZ4QG2ktUSRC%2BBgi0iiH44jgFiawGNud6pXyWYstfBlWTOdUJbqmVYJKU80YOBgzQfhx74uBHLBx8IlXqr8Y9x6vrrs0ri4HlvMQmdiK%2B1dcnenQAyblKoUcPgqQxmcaDQax5wx%2B1wIw7rfxFMT5Ys5qD4hd6wZjYQ7Ac2hn8V4t%2FkGXj0q7TrAcl04SFyDgIy5USt1e4AvK1zW1gIE&X-Amz-Signature=d83294794b0d18bfab6697cdb72927ab91ba2848c893022d643f984174a0551d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
