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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63PL7BT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDk1vESfiv41ZFaY4jbikxAoLTQywIPprQn6YJ6UdfVFgIgTMJd4DZWjvM%2FCpCSEX8M5tc1W%2BLoiya77S02d48vhLgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAUD85mxINujXMHZhSrcA60But4vWGe%2BbJxdpYtdCmbLs%2FzANfiovzlbi3TTHTIP%2FSdQ0HgugKt6ONV%2FNBJLXITN2t4IRWXYTBUuGcLdj83831Ko9TIRFn%2BpIoSElype8jv%2BmK4PjpjOLakjhCZcHm2HgSLWgW1dg74bbxe%2B835ASrseW56JXblaiGwiT5g%2FWT12dIiDVPvCzu9iMjbTw5ImV4rRZ7Ml9sj%2B%2BHIUukzS%2B35K6RQ3hFepg5S2ZcCqwSeaDWp%2FuqdCyfneleDv4%2FlkdM0z0lF8XPGiaOCLMH7AVtbLkiMQhH5MftGKays0eJU6nK9irWaA%2FxEQ4qRew5WEUddZ1abS2terFrJ8uy7lvPQ%2B2p5GUgBsP7QBFtlmYDbPmqk7K%2BiRv5FIfARV4Gdy8vR29Zy417FmKDFe4o8GNL%2Fexr8YkP8EYawHUlIBIlL0ELw4m9XR7P79E%2F%2F9el8sY%2FFfBEbOlPtpJqTEoREcx0M1E3rPrevKbOizTu8Ht51KgFfy%2F3JFyPyVW1Ebfb0IuVJcqWoMl71yoGIrUoPzFzOn%2FNnWaSWwWG7ja2r5x6NEmh1xyleTI950epeQwfSP0bhb3e%2FOFC5QJoPOI7PcmRVuiOTmu5XNBh4rjqH%2FPVhC2J9eDt61ewbxMO6EhL0GOqUBnVkvtAUV7%2Bm9L6WDyXqufZ5zO%2FfU3nGw1fc2B017UWXhZmiCxb6HU%2BMPBn4ZxZo%2BAiIy9Ue0IwPpPIvfxZ6KeQY50teLsii0f0Hu0eMD2v50W0%2Ft1F2rKA7czW98ylE72%2BUu5nHpjQyBoxPg1TL6QqBNpwYOzWR4OMe4Hh0WPg%2FkDU22Bu7xYj%2Fn4jr7acfNU7dL5fnO8Bql8oQss0GT6igTu66w&X-Amz-Signature=8b2e055e6343697e4e186d2829b6be6db16f5057d5fbfe96ab0a1c3e6bd9d658&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63PL7BT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDk1vESfiv41ZFaY4jbikxAoLTQywIPprQn6YJ6UdfVFgIgTMJd4DZWjvM%2FCpCSEX8M5tc1W%2BLoiya77S02d48vhLgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAUD85mxINujXMHZhSrcA60But4vWGe%2BbJxdpYtdCmbLs%2FzANfiovzlbi3TTHTIP%2FSdQ0HgugKt6ONV%2FNBJLXITN2t4IRWXYTBUuGcLdj83831Ko9TIRFn%2BpIoSElype8jv%2BmK4PjpjOLakjhCZcHm2HgSLWgW1dg74bbxe%2B835ASrseW56JXblaiGwiT5g%2FWT12dIiDVPvCzu9iMjbTw5ImV4rRZ7Ml9sj%2B%2BHIUukzS%2B35K6RQ3hFepg5S2ZcCqwSeaDWp%2FuqdCyfneleDv4%2FlkdM0z0lF8XPGiaOCLMH7AVtbLkiMQhH5MftGKays0eJU6nK9irWaA%2FxEQ4qRew5WEUddZ1abS2terFrJ8uy7lvPQ%2B2p5GUgBsP7QBFtlmYDbPmqk7K%2BiRv5FIfARV4Gdy8vR29Zy417FmKDFe4o8GNL%2Fexr8YkP8EYawHUlIBIlL0ELw4m9XR7P79E%2F%2F9el8sY%2FFfBEbOlPtpJqTEoREcx0M1E3rPrevKbOizTu8Ht51KgFfy%2F3JFyPyVW1Ebfb0IuVJcqWoMl71yoGIrUoPzFzOn%2FNnWaSWwWG7ja2r5x6NEmh1xyleTI950epeQwfSP0bhb3e%2FOFC5QJoPOI7PcmRVuiOTmu5XNBh4rjqH%2FPVhC2J9eDt61ewbxMO6EhL0GOqUBnVkvtAUV7%2Bm9L6WDyXqufZ5zO%2FfU3nGw1fc2B017UWXhZmiCxb6HU%2BMPBn4ZxZo%2BAiIy9Ue0IwPpPIvfxZ6KeQY50teLsii0f0Hu0eMD2v50W0%2Ft1F2rKA7czW98ylE72%2BUu5nHpjQyBoxPg1TL6QqBNpwYOzWR4OMe4Hh0WPg%2FkDU22Bu7xYj%2Fn4jr7acfNU7dL5fnO8Bql8oQss0GT6igTu66w&X-Amz-Signature=98555730a1288c2e40155a9e4bcbe4ccc7b1059ac8e92f3ae2f7b4f932fb2e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
