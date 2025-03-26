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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MVRCLE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDW%2BGD9uKh5%2F2jp40DvmO5FJsnJR8WuUrq4ESy6kUy%2BAIhAJwtJSLH5gzyOsEH9wgATmAzhbKPY1nLx8HmFvGSDzZ3Kv8DCDYQABoMNjM3NDIzMTgzODA1Igw5CySlmHC1KvObB4oq3ANWPiH5J3279aEjO253oxRhU7rSCXOOhNDw7akgdm8PVwir%2FxfXmJ3P2Bf3fjl2wkwmcat%2FkD7dXpbs%2BL7EKVcXTEld2tf9Z5W1RLLxesqNH7bAzhMV1qIsmCNNtSKVIFjfQ1eZ3oUNMumu8T5rwBCVgCOh4l13zSBO%2BLCrHuN5WvjVpAzC48UDEEp12b3eghZdwhf3VjFz4Gf69qyD%2FxGs3TW%2FtYaOkapdnoChfCALq%2Fda8YfJ7Ywst2nVEMzFvvztWR68rXpfLItn8BbWhGvMM%2F1vUhgIGvSXiE1L8ZDKkLYRehNiYQbr4oPWH4hUJm2CPGEjEW9HFE6qAXfav5Dlg4hDFrkEsQKA10bXU%2BRe%2BNP8jwt6eO0r57b%2FH61AMUIV%2FI5eIB6zGGjwCVXKIG3ELmh9TzhVfbRDPp6KlLzDBvAUQjosEECxZZ7vMAK4BzG%2F%2Fir24%2BDXalbs2N%2Fs9akAAP0NglFTaQp0GeDsGboc0k1zrsTDsg7ue%2FkJTGC2E7Op%2Bwjnbz6qavlP%2Fp1nadLIVwnpSe2VTOygmSS7Z0HT6LvQsRh3CHf75mwY9ddfcy4osbZr0%2FyAwtQ111XrRfP%2BZyqS2CF134gAapJxDVi6bYWo3hqs9%2FlwXLruNjDi05G%2FBjqkAbwkdUdnSnJin0XKAOcwyIuQu8bR%2FxvUfk4PhvYYlXi5GqCv7mXNgtnvsjDj4JAM%2F%2FeVAryv4z1QjgH8ljOLv2Mj%2B%2BmsIO0mZ4LlKZDDF2mVUiK2vtai17THFzBeEyAcW%2BBx1lBK3y9c31A%2FNIwZ9joCaK89DHdEWCIdj7EJ1DSvDTu0nQ%2BlW2CKP%2B5FyeOyK12FGE9Z%2BxfHlgyejqSUN6zhs3Ky&X-Amz-Signature=575586136d328df31541540f5d135f47f4129de4d4713f4eca18bd22db521ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
