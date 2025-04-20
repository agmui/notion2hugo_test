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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRNSCTW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHmGipNX3Yu9TNUpGYs%2FmEf6NbMGiJjjv5nodTwsuBI2AiBP2agY6ejpQCUGUPsRhOKxQeZoNdqeF9jwEHZNlg4l6CqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5L83Rrp3shvIJtJzKtwD3G%2FwBPJJDAdUMciUJkxAxqN1LxEDVvHkJQJlKn1xxdnQS5CV7hUarORxYFyNJkLPdx9ftXF%2FN%2B9XLzLxaHNVO4L6jjNNX4HY905QkqaguIfFNt%2F3N6tieMle3bvhjPdrdLGe25LAeI5EEg5IQ%2BxHtoqX0brPvpnu5EJHvawQH6onErlMkmaE%2B12XVf1yunW0XtnpzbQzTlsIbgd1nTKowCZqit3gzMkBNyajFuY1bNS%2BfpPuRp4f7fQwXxR4KDGsU0lgOyBS1mErM%2Bh5hwxbzISj1Rh6sbLN7w19mZ1lqDOAk%2FcJQbir0jA6OmhFZbpzFhsVI5xIPIajn5pbxvXoiXkL21Mra7bVqWV0Z6nc7brkA5q%2BF3Xfc30Dv7z3rXow8j1B2kGzxoPKd7w2wz0lw5WacExY%2B8CSIam5YwXBEcTCIHu8Iw%2FN%2FjRVv7AqA7v0ia6PLBNT3nWBnmT5vkMgFJmKrr7y3V6h5pXRK9%2BsQVNclkN5s1rfLSuEVOnAk%2FxR7BVFLfmbON26hyaJHrv4Bdurl80nbwnnjBvzlsQaMKcOWxkzObLOKQfzumyyc5HW19nscZjfRGQyJf8RUZabvlIWAwDmq71lARYeizHLO1a1TL6yiusgMnNrsekwpsOTwAY6pgEAk0XpU63x5jy9QhvuYO2VlM2107rBO7gCUQYecz6anLthpLfCHGaCl7Nsw8zPnqfO4ZOgIhfdYjNRJxRap4qCR51FELz3GwjL6iCoJVpJzvsRfQxW74rhM7GbTpKw2APGPlV7ZiENbJZ4ySaI0uF5tV%2Fxew5S7R0JX7iHJ0qIKJAF3FhnVZffue%2BJuybulIwiV7a1wWZZ0pQ236BqE95vCNkRM6z1&X-Amz-Signature=e2ad0c38ade775dd2655f9be57e4b5f7f670ef2f4e34a687acaebfa6b51f5958&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
