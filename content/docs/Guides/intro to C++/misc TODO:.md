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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7UPYPRD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDq2g3tpHfwKqIHgIEwLMM9OSgn4u3ti5%2BFYMrUXujBqAIhAKMN0uWohdzh0msfwslT3B0weBqg%2FUDFRoWG%2F1XD2eMVKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmcdApvlhc1K3Wbgq3AOJ4Tv01teJTs6V0zGVI668TkfxTW8zFL1QCkAUyG%2B3XRTSMyD6vpN2q0VV%2Fy8eP1Uz%2FJS64GsK42QbkgcoB4GfsKicf%2FOQrjmoTgrVGySjv42fsiDIfQFio%2FE4PKo%2F3pghBVMXVZA%2FYlKJVkcZ09GPuluVtL09hjyqAnxWgKwOzqBc3sy1E30JKhCczlbsA5a%2Fp9cTB2Txm1jylD4fnaZ2nMUOLuqa8Qad5mQ%2FCWKFpKqwTJecc2UgUPoKrcyUq%2FnR9sNrLTsVUfVZsMYNi0hkrsAdQGmCqNdvwcuhr%2B7%2FgWNbnyv0ni9vBDOANT5L9kbUR8RDyeDiDYsZ8xcu%2B4lBYnKyXHQAjX92K64frvSRPOt5wUR8HHZhzCysajaF0193CDv6WOmUdBwbOoM%2Bos9Syw0Ay5DHwrXAxr7EbMp4W5zHhaMJyYXWNBfYXactGBrHe4GKHNifRMLzsqh6ZPhXS6rrz75XV1dbBUzj31EBLSEkX8QVi0jzFQxQCEnd2ySMJ8S8py85EtSLfshDfgpC56ObOB0Qz%2Fy6T5JrBXBr7sun6bJiz7NPnH%2F4331q76iMa%2FEIIzsexst1R3qGwEs15LbJr7E6aq2YIRqdapU%2BkVsvtocQuyMsNZcPBTDWufW%2BBjqkAZbxvOdzWyGC51ifFO58bfrF9SvSPxejiS6zu6lAdiypPUG0Sfd3u5Z%2BlaAX6LXk2M2F%2Fvu1W6GURiTj3hCoPAh24KvDuRDz8m1BPh1MliWxGY0EVq%2F4shLzYAfrWpoGIecrCKoKtcXxt57iXUeHUqR9zCbCiNidTxSObZiB08teHZ4bmfOSeUf7vttalrkQ839gKecC89md67XqOFVnDla0e8wk&X-Amz-Signature=174afb9ae3e5b8223eeca1bbe88636696c38530b20af55a075df194523f0e819&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7UPYPRD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDq2g3tpHfwKqIHgIEwLMM9OSgn4u3ti5%2BFYMrUXujBqAIhAKMN0uWohdzh0msfwslT3B0weBqg%2FUDFRoWG%2F1XD2eMVKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmcdApvlhc1K3Wbgq3AOJ4Tv01teJTs6V0zGVI668TkfxTW8zFL1QCkAUyG%2B3XRTSMyD6vpN2q0VV%2Fy8eP1Uz%2FJS64GsK42QbkgcoB4GfsKicf%2FOQrjmoTgrVGySjv42fsiDIfQFio%2FE4PKo%2F3pghBVMXVZA%2FYlKJVkcZ09GPuluVtL09hjyqAnxWgKwOzqBc3sy1E30JKhCczlbsA5a%2Fp9cTB2Txm1jylD4fnaZ2nMUOLuqa8Qad5mQ%2FCWKFpKqwTJecc2UgUPoKrcyUq%2FnR9sNrLTsVUfVZsMYNi0hkrsAdQGmCqNdvwcuhr%2B7%2FgWNbnyv0ni9vBDOANT5L9kbUR8RDyeDiDYsZ8xcu%2B4lBYnKyXHQAjX92K64frvSRPOt5wUR8HHZhzCysajaF0193CDv6WOmUdBwbOoM%2Bos9Syw0Ay5DHwrXAxr7EbMp4W5zHhaMJyYXWNBfYXactGBrHe4GKHNifRMLzsqh6ZPhXS6rrz75XV1dbBUzj31EBLSEkX8QVi0jzFQxQCEnd2ySMJ8S8py85EtSLfshDfgpC56ObOB0Qz%2Fy6T5JrBXBr7sun6bJiz7NPnH%2F4331q76iMa%2FEIIzsexst1R3qGwEs15LbJr7E6aq2YIRqdapU%2BkVsvtocQuyMsNZcPBTDWufW%2BBjqkAZbxvOdzWyGC51ifFO58bfrF9SvSPxejiS6zu6lAdiypPUG0Sfd3u5Z%2BlaAX6LXk2M2F%2Fvu1W6GURiTj3hCoPAh24KvDuRDz8m1BPh1MliWxGY0EVq%2F4shLzYAfrWpoGIecrCKoKtcXxt57iXUeHUqR9zCbCiNidTxSObZiB08teHZ4bmfOSeUf7vttalrkQ839gKecC89md67XqOFVnDla0e8wk&X-Amz-Signature=2e99b8fd6838500bfb27cc4a8e4c7590c64f7e078b5d7a7284c78d64774cd1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
