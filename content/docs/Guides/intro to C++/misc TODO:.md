---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPS55CU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDneWyPwy%2FBuD0aDf4pcVsqn8%2BR7WZnLzTllJphubUhHAIhAIaDAFCWPYPj%2BBrDM3by7CLQuz42vqU99V1%2FOI5Ktm22KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMEMwxYL8bbLaErhAq3APf%2Fa5Mnh6HWAxhTsIimn0QjmWIF4b3NHrof1Cux4f067PoFFBpMpx%2B0Bfn22mecbCnsuaylXkU16KgnqqdrCeoRU8R9lTV2PrTT6Dwrao1cOXkgqsoQPOorOugNUWP3KR3ax%2BUMZh4yLUImmkJJxSpbVLSBvX9BuRWGfLmnCjIH1aigleeueV%2Bvy3rx0Yds210p0nMBHPfE6wiQZvNcUPHqFBcg5cmswFVSNRLFU3O3WKITKMVmlRvPgDWyw9z%2BeX3qbzh1MFajw2Sv1jUn9MaUNEnPNwc%2FMM14D91QWD%2Fvor%2FA7gYoCmamCXF%2BZut9ThYto%2FsZIi4kuepZ71awtU26UvADyWDa5ivf1jhxVrMCdtd%2BTrl5wAP%2BHJfyVvr8Mx8pWQRxDMDoKAoXwti35Co2SETWys70ma4YVpxAVosPbnh5tch4JJHAJJ51YmGNUi8NcrtocHE1entIUDuEbMMNln6A%2F03ihYqwWX47iO2Hd59uPwhq87ZdDqCaPPu1Ktq%2B3DNfeePvLOWxh6Z5q3YcJeIxD0ESuQ%2B%2BJ30Tah53YSZ%2FD5RMm8k2MYT1yTiOyfGhu2o1nW0L0WHDZvtlDSL3XY87Wr5yMQsyGTVTZLtcnH4c9%2Fh3gYq%2BofrDzCTp%2Bi%2FBjqkAYAPiQokS2iHyhYifOzH21G6ItQkBnmnm6osdzji%2FZ73%2B0hs3fu%2FIAX6r9j8bJHvdfesJnV4PSqTskZmivgqPyazkoBcHtrDbT9eSVgb01Wi1AFKC1FaebavjU3bGofSGK%2B507QXucpt6wz%2Fo6Yl0Z97xmrW6xPBLhjQCiSp8nyCZy5nyhjXaai5%2FVGFrk%2FhDlxHKscGETGqzYUanI3xtz%2Bwvr%2FM&X-Amz-Signature=64ada12731161894dbf4b8e3c8f1484b33a8058c0326024a9876b05bd70ddc49&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPS55CU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDneWyPwy%2FBuD0aDf4pcVsqn8%2BR7WZnLzTllJphubUhHAIhAIaDAFCWPYPj%2BBrDM3by7CLQuz42vqU99V1%2FOI5Ktm22KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMEMwxYL8bbLaErhAq3APf%2Fa5Mnh6HWAxhTsIimn0QjmWIF4b3NHrof1Cux4f067PoFFBpMpx%2B0Bfn22mecbCnsuaylXkU16KgnqqdrCeoRU8R9lTV2PrTT6Dwrao1cOXkgqsoQPOorOugNUWP3KR3ax%2BUMZh4yLUImmkJJxSpbVLSBvX9BuRWGfLmnCjIH1aigleeueV%2Bvy3rx0Yds210p0nMBHPfE6wiQZvNcUPHqFBcg5cmswFVSNRLFU3O3WKITKMVmlRvPgDWyw9z%2BeX3qbzh1MFajw2Sv1jUn9MaUNEnPNwc%2FMM14D91QWD%2Fvor%2FA7gYoCmamCXF%2BZut9ThYto%2FsZIi4kuepZ71awtU26UvADyWDa5ivf1jhxVrMCdtd%2BTrl5wAP%2BHJfyVvr8Mx8pWQRxDMDoKAoXwti35Co2SETWys70ma4YVpxAVosPbnh5tch4JJHAJJ51YmGNUi8NcrtocHE1entIUDuEbMMNln6A%2F03ihYqwWX47iO2Hd59uPwhq87ZdDqCaPPu1Ktq%2B3DNfeePvLOWxh6Z5q3YcJeIxD0ESuQ%2B%2BJ30Tah53YSZ%2FD5RMm8k2MYT1yTiOyfGhu2o1nW0L0WHDZvtlDSL3XY87Wr5yMQsyGTVTZLtcnH4c9%2Fh3gYq%2BofrDzCTp%2Bi%2FBjqkAYAPiQokS2iHyhYifOzH21G6ItQkBnmnm6osdzji%2FZ73%2B0hs3fu%2FIAX6r9j8bJHvdfesJnV4PSqTskZmivgqPyazkoBcHtrDbT9eSVgb01Wi1AFKC1FaebavjU3bGofSGK%2B507QXucpt6wz%2Fo6Yl0Z97xmrW6xPBLhjQCiSp8nyCZy5nyhjXaai5%2FVGFrk%2FhDlxHKscGETGqzYUanI3xtz%2Bwvr%2FM&X-Amz-Signature=da9a6a2a97fa2f284ac8a8b2267cdbe2258ca8ad8397e341a818c39db35406ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
