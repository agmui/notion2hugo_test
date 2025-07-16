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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBSGPIRG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC0aO8ExcgkQY1tDYo00UgZtDXUjcawig%2FmVr%2BHEy%2FuwAIhAPZeblQm9npcRJi%2BdYTJq8CqPn8pJUQ%2FMEbv%2B%2BXP7VK5Kv8DCGQQABoMNjM3NDIzMTgzODA1IgzSJWn7NB53Ox7rICkq3AMVwzHJaXV97%2FwDSqQrxYofvlIpNHaDwTWD3UrSODkGVvDebuEBnK4t3VQK6SQrrVwEP%2FiqSrkdaaR%2B%2FczWAaLleJ1pZz7BA9rhJoCnPtavtVoCl8lLTtwrTd49355UpQzDkOzw02BKe67W3GRjyaNaYlQXEGVDPGwX%2BB46UCFSphct8fuGeY3zijSifMtjAfeTIEr8F%2Fb33CUN6rO2d1XEs%2FefALCt4EjSA3yFQZiB6A%2Fc3wlpFe7S6siXRxWK3TIYlVvr2iIrJv2OTQgF5myJgZfWZeoNAdiWmgZqWF8%2F%2FlmDe8Nc%2FMDbLwDigSnU0yRYlibo082KGxitSZN%2Bu8DyujC8X%2FbIDKp2ZsPgpUzW0TGFZWO0ceYlUWL%2BI2e3z3PH1GPxxYhbReGRJNk8wLn6lUhZ3HlMCkDeS6%2F%2BL6ii3ZYRr3m2ZzLL9HOiWg%2BxqTr0ly8TihVBhIfDYpOJouWvLzook3Xno7d7G4CA63LjaWIrlwPSeYJF6aCRC4wBdqrkMWdoUKAPaVd5kxVx%2BG9hkRGMhiiX1ji%2FQxYJtQU14Q6LyX25ivFYFAHeXUifsw8mLDF5gY6QiYvRRl%2FuruAB8g8sV0Uk%2F5Cf8am7HvLLiga3FykpvZGx7co1nTDN4N%2FDBjqkARS7sQfowdK5ykoe3FYzBnfcs%2BJiHSf88NUFjPuummzBxtJwpTbItnHdxo4iqYmqCC2wjAXBs%2FE4RPn5MqJN7BVTIWDppMUG%2BHF1QrhR4g7r22R%2BKLsRLz09dT%2FU1ZEthwSrK8nYyyGjg8jTK%2BuczLAgr3C7zuvkKdNRct%2BW18S%2FF5Jt6qwIcI3%2BxM%2Fpsn94NyG5dSdp8%2BWKj9S70HewVe2Tj9bA&X-Amz-Signature=61fda85e4a3f6aa013e14432485501016cdc3a4f52e4bb4fb0e6e4054f280035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
