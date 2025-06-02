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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAWISQN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCXIaZ2jnciVn9K%2F67Fx1nhxj2nJQopvxMi7pKiNlyHDQIhAKCZZOKSyJPsAgvk8VhJdkB%2BgCR8QOB0fzKLvk5BW63RKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFXrKhkeRV0Ol9hgYq3AM7jfBZswmtzOeqbrvkvFLqJD6hINDiDmqFAbDxN9AsbFMNxW5V%2BzYMg8X2%2BYFbSocGwoRVl%2FKqZMP8FF4OLX6oKQIVL3%2Ffxfu6oKUbQXtp19qsG7QUpqlRNjHUVEDzJqFVEN4fZlvtuoZMC0PaLPQfLEeaL7rFeSkTm0v9tNwFqjto93g7CoWMYr7XWF0mirdyINteVSLrrBL7lrz90DcU66uaG55l5W2vG7Geem1G97wnmSxUB8M2hz8dMw%2BSYfg3XtTjdPu6Ph2Ny3MtGWw%2FUjN7eQzRw6SSmKCBnz2NkVtD13td2D6w6CN1itOWc22Ynjo0rsGymblaGbIh%2FpYrAxnNIuBnOxE%2FCMscsCNUR8LU1h9HYP0S7m4jbhUxUvNqA1oTXOoM9HWJwHMJS9SLWXDXLXA8hRZh5d6f6f8K5Us73jp8gLGEUYayZFLsXJPXJxLSpZPeAJvLe3WLstaq9ZzLE5XRlVfgKvxtnZtNbX748s%2BMEoqCt5f%2BfCRjjT9tvRDsiBB%2FiXQqbyrR%2FPSNKGTSGiVJ%2B59cb3u0qXMlF1I7jN%2BYwIAZfOx8QZHxwLP6Lr1n3eHs1Ny7M0%2FJ%2F1IjzUmX3QZq9R9RNsD53Eiow3xaw7JYA%2F9L6qDGtDCQkPXBBjqkATTqceWGmPKeHpP3yid3CC%2FGX9%2BlxW4Y8yPdS%2FkY0B7TQcrs%2FBN21DsYCZGptoMhZiEKoIKbCdkm6nyT5FRepWnAMbr5v%2BXam7fNrukus5RDGXR0AYrvE%2F7sivX3LdWvGclbkU66P9r5AxgCmxPeqBhkTmJ0GE5o1WHApSNpeAYmkArWToTLfFeoq3y9vKwc59HibnajQl8Mu1hBmF81ou9gpsS0&X-Amz-Signature=4a47681ce39f5c69ad98504fb7cb5de9fee45916220587a8018163b513d3be57&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
