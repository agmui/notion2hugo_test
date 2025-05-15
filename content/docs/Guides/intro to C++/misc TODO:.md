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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR23552%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDq%2FALaofta0YK%2BcmIeh97Hc%2BTSVQYV9gkSt0Zv9UxM7gIgSNbK31DItoEaPXHottOwtIyFJRGEV7Yytdp%2BYEZZ5wEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDM5nnd%2FY7KOg0Zw0XircA6Moq7yzb44eR%2BVpcQM%2FMZKzTJmMMtRWJ6K7sHKX0qu84hSajo028NQZD%2BBZYe3vTWsiCecnmrGfOS3z%2FwH3eq%2FnMbTLAefKMoKnQAk%2Fp4OOkcAWlLNUEWT9OmIoCrguMTTGFb%2Bf4WuurLzavsuMWIFh5MViMavdtC36q%2F2nt6Pap5YM4OT5Sbi6JM9G2kpTOS0OM33SSbTYrFzZbDRokaq4Qo8LiP4Yeih94jhqLIsOcOd0csc0m0XNc51XuNYXFAUCgWwT%2BdkVBxEruTFaRF2gDROvsI8oxVucdBehc5ssmlZQUL8Y0vaYn%2BjfsUz%2Bk9BJiubaHyv0%2B74cxG2zvdhdTH0woJYMo%2FSYvecerzGsaaSppaBtP7uHoLlogBkv%2FmoU8BQwImO97%2B90xOCFROko9gsDTI0TsZZaBCl%2F%2BnBMy9dNlvdCC%2BHCQ0fY9SA5FCE6ESCSI7pq0ZhudI8DtmfFQhHOclGuM5lwGcO9TBnUGYD2pCev3AKXnSa43MHioVJE8diGbhvAFvYFSQIIEIUqiP%2Bkxxhf2fD90quJ4rU9Z8KPKclCRqt%2BCT8ahr9mWB3266QrPbB3XwstR99bHr%2FY9CBhVcToHmYiOvl2YLemIZinMAowtBvkfKoBMNWdlsEGOqUBOyxe%2BeT%2Byn3istAN%2FgiJWx3QWc3aj3yupuTQRULfWRrn%2FslHxa3t5KVkRIryShc%2B6eTGYhJLljXrnO5QyAy4%2FUPDwJovH%2F4YU%2Fdm5PJmFSoB0AkBnmyXZWAKGZLjYq0jTF%2FA6Wu2da8Pnm2WaJEqUpkm4Gn6kkvFss4NAIM%2FkhL5kZ%2Fx1afDB35l3P1COVoEWkmf7skncMBb83f1o%2FPHVIlYPiH7&X-Amz-Signature=030e664a4c549e51e19a10f2c48a42ca99a7fe5f677893817188b26e9cf85d35&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR23552%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDq%2FALaofta0YK%2BcmIeh97Hc%2BTSVQYV9gkSt0Zv9UxM7gIgSNbK31DItoEaPXHottOwtIyFJRGEV7Yytdp%2BYEZZ5wEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDM5nnd%2FY7KOg0Zw0XircA6Moq7yzb44eR%2BVpcQM%2FMZKzTJmMMtRWJ6K7sHKX0qu84hSajo028NQZD%2BBZYe3vTWsiCecnmrGfOS3z%2FwH3eq%2FnMbTLAefKMoKnQAk%2Fp4OOkcAWlLNUEWT9OmIoCrguMTTGFb%2Bf4WuurLzavsuMWIFh5MViMavdtC36q%2F2nt6Pap5YM4OT5Sbi6JM9G2kpTOS0OM33SSbTYrFzZbDRokaq4Qo8LiP4Yeih94jhqLIsOcOd0csc0m0XNc51XuNYXFAUCgWwT%2BdkVBxEruTFaRF2gDROvsI8oxVucdBehc5ssmlZQUL8Y0vaYn%2BjfsUz%2Bk9BJiubaHyv0%2B74cxG2zvdhdTH0woJYMo%2FSYvecerzGsaaSppaBtP7uHoLlogBkv%2FmoU8BQwImO97%2B90xOCFROko9gsDTI0TsZZaBCl%2F%2BnBMy9dNlvdCC%2BHCQ0fY9SA5FCE6ESCSI7pq0ZhudI8DtmfFQhHOclGuM5lwGcO9TBnUGYD2pCev3AKXnSa43MHioVJE8diGbhvAFvYFSQIIEIUqiP%2Bkxxhf2fD90quJ4rU9Z8KPKclCRqt%2BCT8ahr9mWB3266QrPbB3XwstR99bHr%2FY9CBhVcToHmYiOvl2YLemIZinMAowtBvkfKoBMNWdlsEGOqUBOyxe%2BeT%2Byn3istAN%2FgiJWx3QWc3aj3yupuTQRULfWRrn%2FslHxa3t5KVkRIryShc%2B6eTGYhJLljXrnO5QyAy4%2FUPDwJovH%2F4YU%2Fdm5PJmFSoB0AkBnmyXZWAKGZLjYq0jTF%2FA6Wu2da8Pnm2WaJEqUpkm4Gn6kkvFss4NAIM%2FkhL5kZ%2Fx1afDB35l3P1COVoEWkmf7skncMBb83f1o%2FPHVIlYPiH7&X-Amz-Signature=307668de959969d3df453d22379ea89ecca6add135c57e194804172033519d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
