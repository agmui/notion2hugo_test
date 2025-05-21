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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BCY7PC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDLrdgqaji3XRQ52hwKl1dQjVQYnS5n3pk4HDCfPuxw%2BAIhAMjb9zJNswOOj2hQ2hCBTLo8NRlvu3yBy4cTIAGOtcxoKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7cqURDJE4tFZMiQYq3AMFrlflocLku2d1BehRjQqqcBY9RO9upWB%2BbppaQY8RGZWtZceht1WNxGKVZoSTXumIpE9c9ZpFwFzLr%2FQl2UDjRCFuF3HkS0qFeD7iNls3YhkvtqdzqKelCN0qGPk1SWaqMUqRqKh%2Bjp7KGmZlzxm56uJc5tF8J%2Bp8FEt9p%2B9%2B%2Frgcxo8dfEu3Mgrih6x2%2B2WHQi%2BXYtUK%2FyCzAlBxxHPMcqd9YrNEjkECauxBB4eA05CjOLZa5puEXemvmYwPjTG8URtYcYPHaMXT5J7ZVNylbv9KjhnH3K3Gbg7yehAgRA6jteE13sVJ9aUlgJHLOfJAiJ10p2ZgU4f6wGg6MIPfwOe8QWIgyHRIKRDECYW2Uet%2F7XUPBv6ZzY40x%2F91uu%2FbrjDLPRlg62EFVfXQbTaII3aRI%2FTuKulj0DoQWdT%2BaBXhO5y2YCJO0f7yFBD%2FofgHS9d14pGljHS3BUrWMeI14KbPgMjrTCEPJgFZQue8epkUaH5yX6hQlU6J6P%2FlyPWrv8FtyLk667jULfqQKKut1oQX%2BUuHz%2BUAyj0r%2FZdTEt603ik1qlAx%2B2k%2FjYp4dW2oA4ahiLlqsMTNI2lKOI0Ae1tYsQ7PbmjTrwJCuhS13%2B2TVvF4gnXaSKuZ7TCX1LbBBjqkAUlF7aRNCwsSHPwIVp%2FAEpAT2LwoCg0DZIeJVesOTYwO%2FZnN%2BgE02u1Gcl4DYFXwGl%2B%2BKSPkG4%2FnJOVNTtpOgItbuctBXyW6zizKjF%2BghjVp24GhXdkuOybl2uzr8CjC8oyC%2FtC8ooWfnf1MOoal2Q0DO6weFEE5oFxdGTQjQtgM4k1RXOnS8jEhPdTPUrCF9fY%2FBC%2BFdHT5wq376jYhbimTLKEd&X-Amz-Signature=7af0736a73e57c106daa7922192b5e173fa3d2d49f82994b76fe5a0c77f691d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
