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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGIXSV2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDSZjY0v3VNY9%2FnejaPY3HQlZAqAgWNImCql8eNVERkPQIhANBjI7%2BvHA9Kq9yq2Agv6JqNh67dJHTQlgkDDJBYOO5VKv8DCH8QABoMNjM3NDIzMTgzODA1Igx39LTdGaoE4gqzk50q3AO4VzPgojs4cQxHjUJGeG%2BaaqGTwMdF07CkpB%2BTej6MvgKRY8wGxIHgNTzzhDfagqQJWTrevcnC8JoI5RGNR6Wd3lIASzMsh6UYh%2BdyHuxPzxCg5g0XYltRoI48KwPTP0QiC2yuv7Cy8C9JERlLC15xWZz1FGEGbv37X8zxVxMbad3ihbVPhODd8fTpkIeeI8sJVG7v2lxd8kBb9muF1qTC%2B%2BPkyw6I7QnSRvxWhZ5xdkIL%2FEFUqdmwn%2FOSPffva7%2F1upDuNg0jHfziyKGjxcdkaeTH3sJssEzDUsOTdAwQ3phUXf6INObz3qYUPskPB3Vug7YqCkz8Me5eAxXqZ%2BUu9AWuxY1PlNGJanAxq%2BX5eB5glyzS5BnGsk6ZVwvy%2BFXL%2F3pN3BQkKyT5n2Xf%2F83gWblSLjoBo85nBHWz8tZsbFj6%2Fp6UCeBaUmFMQdT0lTP2O2b1Gm65FJ%2BS%2BUOLzKo9IvO4OIeU5E3Mz05BlkC1vDESx%2FOV78g%2Fsf%2ByzBHd0dc1HmHxk%2FsP%2F%2Fhrzt5fkbqEkC9LjN5UlM00ZQD7dOJudxRg1gaF6cneD5J0Yf%2B0vQHPE%2FY9Bi5uNzLH9%2FOIp%2FYu5mjfkHiLzgyyBQep6XHtFVwMuJiS5SzgnHC%2FKzCZwda%2FBjqkAeBMLTy22hY8qZMz29UbAiKZGYZOm8JBE4AO0FNkr1QRFNy8V2rf5KArFol8HJZJzW87awqz7itkDcqpxQYyFmrSTWEanBNA6Zfp7kDeZ0mkSVWm9GKfb22xcsnlEl%2BHifWwE8To2ZkAkpL%2BefMknrHKg0ARrf%2BdAeJdH%2FcDFOxNuTAThgWUxT7KJegxfSmjcgeEaxvvijbnyGRF4YrlmhpZE8C%2F&X-Amz-Signature=6142b35bcc6dc1865ea438c604081928b6a9be89b9e27809ea9e6d727d751ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
