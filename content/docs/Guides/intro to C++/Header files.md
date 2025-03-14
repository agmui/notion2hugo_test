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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JK5O3IU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw0gmwdhAS56ROQjM4K9otVZ5e%2FtOBy0x8hptDZ5x5vwIhAMBIbrD4cTyhLba113EN9XkZl6gX22Ug1sbUdcwHFeRQKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3T6d0d7DagJKP7vsq3AMRQOKUObYxwzuBJW2uWCnIGNxkWRvqgLjCgiIRgMrCLwes%2BFy9vLcTGkYrP04AuAGJ4n%2FFlY6dhjA9TSUxmrcTZYIjzzB%2Ff0pnZhF6XXg58qsaaF5ZdzavTP1qH%2BntbwMHV1pc7fNj%2F15vy9VQ0Z%2BK56YQK%2BaZIrjzw8ckTRcXm%2BA7wuFezOGiUR3ZdyRR4DF4dASp9A0tMw7ZHizG358GwrTqafUiAWbRrrT1fNqorxmoIW7xCz1l6CLC%2F5ZjNlu125ikcjfa2xnmv%2BvFvbXwGmlnbxpwM9l%2FfvINeuB9XZykt43VxMRC5bIB55yhzU7Pbz%2BmR1x02E8xGxRqw6H66tx8wTAIB2x%2BbikedN6BFGQ23Wgu8dY57p5FwMg%2BF%2B15QaOKglUFl7VWfTQvFny8rzZQKfzkpOd30teIbxkJrDJbdp0hson%2BxNCkhhJKPJYP4YJ4B2ul%2F82DeCnfMsdumXhdCVyW%2Bj122kWw8192R2m6fQALPgZTOjA7bBOZQqLkr5a9%2FF5JN1V1jWj0bLiurYlgSYBknoikXwiXy4vn36yyPdm4hTv1m3WUNqtQ3cJZV7YXassvuvqzVsTUZhaS5l9vsN7tQZKwJ0fYHagp8hDl0f3T8%2FbcfxliezC6htC%2BBjqkATetR3TFeaejIIkjqkpCn%2Bp3Dq8Uazz9sQ5QihKvYtNjYJRDJgW0qTZWXrVrBTt%2BCBv27T%2F5%2Fs8gI7iX84xZznhk1ZQ5xlWRY5ol%2BFwgr6yY9jIytfCVOhOkRiYfNixrbKqlt6X4G2xypZQb1WzgIKi7QGdz5vWuRw12Wq0WgyvrvLQm98Aeb4nWRImzJ%2BQYJFf%2Ffs0ONLITztBCyJHU5AMa3dIR&X-Amz-Signature=53e18fae7a08a09f25b3bd74b9a42ccc9fe7ec1bc8ab51d675529ea85b250b66&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
