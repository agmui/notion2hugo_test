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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYFXXHE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrRaoGQoNJNbjveUL3Yt8vjZC%2BzHehPeALlz%2B%2B3SownAiEAgfjKvVbzJnCRXimK7Ul%2BWvUKbquFumrpiAbY0dUPbScqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeFy%2FHEUn%2Fg8vY%2FBCrcA1fOhWprDzJ8t%2BM4qoPBL%2Fn5wSgkiw0CWGcDF2J9jwkbsxsv7kE9dH7CdBU7Xia5jHyKPJWNe1%2B5Vn09amLg4lu7MwWYDaZu9JHs%2F5jnTi%2BYyvzO5CNqwVRG7uBwtx%2FHC%2BlMkGkFRP1V2sbCvvb%2B23hFk1SEhR4gFXHomPsEv5Y2lv441TjXHZhmsM4%2FRBzXyMtcgePrlLbNYIpj5FALKueFq3e6UNPQzW0vDi0fUtdKJMxp26PAfyLt65JrIUWQ4Cdk3wuTo9QUi54VUUdNEGAtxTbOt7VDSruyq91X7YabxJz9tcim3INZR4eQa0KvnF1gxCodPxEK%2FT5Grcbulug6DRCiU1sHpOjpJ6IuPEBSbBv%2FwzgM%2FQVYRn5O6kVQuGz7I09c4qSrqptemZP%2BcgX80c7hf5wRb1udBbPfa%2BDmTdmlTpzjWkcAO0vlexuHsiVAEdd5BvhUMASgXfLBZSbq6SywqXb8NAEnuMVXUrLeQoR27bxhuZtOceJCINV9MLZ5c1EauSw1kvDVsWuNMk8A9llKFAM68qWkxL%2FrGlK9LyB1Go7%2F7lMxjNkN677iPztCXohsJ1NGftaFGbbl7AmtcqU0WS7fT01njEAk3XrbF0spef3eSIYDkeECMMD8jMAGOqUBxvZKQgv48lzZUhXIFOWnEGt%2FQ1W0L44ewkGJWTLDClBY5zfjgwmkMuFJn5FKe%2B6p%2B%2Brev6w6ShQbRuYuuPlMx3GtnAfEiSKRHINnl8WVlQDrG1r5PJYnHvfCefj5woNeujcSnFXT2cMlNpo4hd4O%2F2iErItzAmmP%2Bwl1bgMxEcCzQgmSSCSUEpVMoHCkRmzV7PrT%2BfBvZHnMetMkxn5dcr5lxY9C&X-Amz-Signature=25ccf3be13b0c1f7d5576be619d77f0ef4f39a8674b91091641605803f58266c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
