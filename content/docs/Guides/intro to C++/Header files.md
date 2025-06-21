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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXLLH46%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID81gI0ph3xzuACBAt5TC7xwFFhiWh1yLypsrpjcVPzsAiBa6YDCb3DIH6bhdldWAFKtPbbvYYaLolQ0v%2Bkl8QirISqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUOCEvL%2BGDewawE2kKtwDxsxRNR4Qh6EmG3qA0etFnCdHk3NQOlN6nLcvFPsJDGpPy%2FpFBE8%2Fa1LNk4He3RV6vt2HteEdb07ZPRyVJq7AcF5pDsfuovim3UsFFR5QOXX10B%2FWM%2BH4hp0GGTOPy6VEjoQ7QVgFT9i3RHaFhvNweNBOhcs6XBu6xAaKaTJ7gUvp2wUVnut0rdGJbzkENudZaCM9wU85iCOCXoAr56B%2FBi0K6Bw%2F60QTdgv%2Bl%2Fd2oXnCQ%2FPuWfc%2B3IbBYu6LuTNzMgGe0cYPvfNkrTy%2F5qPvrwEyrO8A9bH5Z2cW%2FCoHCg6UL%2FMy6e%2FXpWZEYt%2BxKY2fH0Hc18KXfYSLTsXmYNPJAUyUGjrRY2W9Ve1IymFk93wAMlPnKwpB4OZV1qgdAyLhtBqkquFlnnpePL7O16AmELBGJnRinzeRIL%2B21N5Ex9kQa6m%2BEa76fh85TkL4BWY9nPsGYTVtqed45FGIhJ1vlHPI8ECH160ikYQK6lTnHlGWEXtBwqTzspcm04vEHiAdfgVSXbK%2Fm%2Ff8yKJsf5fse2PkWIodcwCrSB6r5NWySVh7xSrq3r7K1kRCqKa04kZhtH27ZMiq3o7Q%2Fy5NyATAIM8R8UqRS0upVkuq7VmlwCJKdamu4oy6Jf49k7gw4qfbwgY6pgEqeHZRQ1ipsY%2BhslgXKAgejGRZF0X7YA%2FyeLBz8CUi7kcmlCGJSJRax9j3ZCa%2FODXdCZSpbjci0wz8FcLRKUp5VUnAImpke%2BrULW4VldfgTsnlQh061LX8EqVhC%2FetEIzd9aGnG1vF%2FJzzBZAko8rosAGsQ1nGVNquSWrbSdp34sgBumzf%2Bg4bt3pcBH%2FbIoRVZaWm9pr%2FK73oQhR30negwroGKpyg&X-Amz-Signature=408987b22de29a9182e0cd4111dde547fb3673ad14f7aa2dc939e47f4cd4c721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
