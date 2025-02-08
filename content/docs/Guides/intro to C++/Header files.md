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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVQXGAX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIF6W68%2FhNdChMwGIbeF6y813MyikZDVrrMVc7Wd7tiSwAiEA08ceok6sFpeW0pE6UXg77XzS8NAHrox%2F6Y0sf9H73QMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT4ThtPgXSeap0pCyrcA7v8X%2FWSrMZzLlKFEEuHfxOP1OT1nxpyD%2BS3abU6CrAOK7zJ%2BZSeJCLL52%2B0xwur1%2FII5tLEQu9AkuISfkT9IeGGK3zF5NOdVNgh36CP51w3A6aV23ThOawuOGolHRFSWS37pc491eqaiUQfGNYsG%2FmGtbLY7xSLCykmSk%2B2gDtUN8iwAJgAFhjAroypDN%2FCkm1ZdO2b0XbwyakZDYw93GzXDnY0aKcUDXvmmg4ZYDcWOl%2Fl4vt7QLB5hel8IYcCO1DqCjzuVYubfHs%2BQZd2ryIVCe1H4YiKMLKdM20JzvR4E974ZzBmWN6J0cjssW7%2FBd7m60%2BUS%2BcPcN3tlaNDf7nBgcxT2K245730xccGapAzHRLikrbjzYnQoUD80lufxde2d%2FHOha4oLYPlhWPkjRGhPUm26n8hbo3PTKfrDvF2fGugrBQEC0fFoc64xOcSKv904ecSX%2FRo5BXMdWwIt6l01kPV1lOrfSosIN2bvuUTNouP0MZ2bVRRTPXtcfsP9e6OuhA9F6TjY6ACFzR7Zu8e3WdmpeZI2ERgw5CTMEeCSFrgr%2FghhrLZldllXbgmKm4ZAWoqHVDtvUJSAnx2MXPXZGAitkBE8LG28lI7XcUinTQJa%2B3ntiRXob%2FhMK2Gnb0GOqUBG1RENGGikZUn4toZi0vgcukoZAkqranY79pObuEJXf%2FT2bU7cog7nThZlmRbo%2BTNjq9wWdolw5WUS6MqsOCc%2BovMFYBliUvCWZ2ObbCHtrz%2B620lZwj%2BfasGtAJmQfWQM3jK0GCiOLYTFQ7ysLNsE6aN7pkx67ROCNnnRIEdt1as2lkPDJNzBSZbnJSbezfhtgN5tmZcBC9eV3hLSgyoZxZz43hc&X-Amz-Signature=2c5471af2ae9d5d846052c2afd74fb4af2af3828c52b770e2b6f9e3b17691388&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
