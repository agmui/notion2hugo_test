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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LOTAET%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDGg3SbTYmzkMGx736690xy8fsQwPlv0NUNfU%2FCGulUAiBtZEiAGgJkUwxjEk9%2Blr5mll6WV7Es6xV4OQO81os%2BaSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMh3EMLDgU1qTUKyXzKtwDdUXODNUAZpR3U8l1PY%2Fz%2BnFNmuaMVrhPNwYOhmWJRVgsyOGf0DV6q0MRnxTidcTXZmNbDKkKGX0MraTVUQH6yUq%2BwyjyvmJfo6%2BqwhJOhYTaNgAzobwLbG71E%2BeMnXNPioEy0u%2FoIqxF0wKfgVI9aSg%2B3VpZ6nANI3j8QzzYxUU5GRXf1kO1N23DGAV8bKkJDBHeEeNOnc9eer%2BD1yLOH58QfzlPIj8M8326kONTdkWUlW85Zl4InxtiDt6%2FaYoTi5x%2FQ%2BgWb2U8zdTVsSq2%2FM238MiM1cvXz%2FiUnqpzjuL1xymnPEkD1GEtPhMeTJDEhLrEEmIP9GnbzubZSnzgNY7buzF30niMRsTb1ozJhhoUdsNMfPk4AT9eUurQOiDvges%2FJnKCmPa0kIUtkueo7Q0C221A2E5A17Mfozzw3sF5JAx0N1udYhdr3xF4yIf4Gd0s1nayHR%2FwzAUN%2Fk8ojzHYuzLMYNgIkIaHLyWc0zOdS%2Foe4Aoh14ycVDr6w8T11L2M%2F%2BEwJxOu3yd9haFAgW36seCscKeVWo32UcFlCsJ9kE3SnN1kScb6oEvrPOu7p%2BSXSklz7%2BMRnHmUSGD038z7Orih4t7zc0CkpIf%2FoPjT2oEL1NZsLGtnkcsw%2BJPwvQY6pgHVZVJ65SM8rcl47UUp0xJsm3P371SVQpkIUxZwzFMDYFSFXUXdWDlZdU9SLRUdd8AjSpCEgGJqf0iv67cIgSDfJgknyeg808FM7qXXlqrl5rz5kzqX%2BjswyATM6rvw5wEgmR4DWY%2FlcpQR%2Fu9t08meV39TN3c%2BexgYvMcnNOvM8dl2CEJgDWnFzJrP7y89YyHd505WqKHZYVIFogk%2Fgo%2FWeul8hzFX&X-Amz-Signature=72469d289a94a688aad3378a88b59c977c6e335bccf1a504eed7ce0863cd8400&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
